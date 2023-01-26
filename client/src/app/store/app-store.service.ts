import { Injectable } from "@angular/core";
import { BehaviorSubject, finalize, Subject } from "rxjs";
import { HttpAppService } from "../services/http-app.service";
import { CalculatedValue } from "../models/calculated-value";
import { CalculatedValuePayload } from "../models/calculated-value-payload";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  readonly alreadyCalculatedFibonacciValues$: BehaviorSubject<CalculatedValue[]> = new BehaviorSubject<CalculatedValue[]>([]);
  readonly alreadyCalculatedFibonacciValuesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  readonly alreadyCalculatedValuesIndexes$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  readonly alreadyCalculatedValuesIndexesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  readonly calculateValueLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly calculateValueSuccess$: Subject<boolean> = new Subject<boolean>();

  readonly selectedIndexes$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor(private http: HttpAppService) {}

  public getAlreadyCalculatedFibonacciValues(): void {
    this.alreadyCalculatedFibonacciValuesLoading$.next(true);
    this.http.getAlreadyCalculatedFibonacciValues()
      .pipe(finalize(() => this.alreadyCalculatedFibonacciValuesLoading$.next(false)))
      .subscribe((data: CalculatedValuePayload) => {
        const values: CalculatedValue[] = [];
        for (const [key, value] of Object.entries(data)) {
          values.push({index: Number(key), value: Number(value)})
        }
        this.alreadyCalculatedFibonacciValues$.next(values);
      });
  }

  public getAlreadyCalculatedValuesIndexes(): void {
    this.alreadyCalculatedValuesIndexesLoading$.next(true);
    this.http.getAlreadyCalculatedValuesIndexes()
      .pipe(finalize(() => this.alreadyCalculatedValuesIndexesLoading$.next(false)))
      .subscribe((data: number[]) => {
        const indexes: number[] = [];
        data.forEach((index: number) => {
          if (index !== null && !indexes.includes(index))
            indexes.push(index)
        });
        indexes.sort((a: number, b: number) => a - b);
        this.alreadyCalculatedValuesIndexes$.next(indexes);
      });
  }

  public calculateValue(index: number): void {
    this.calculateValueLoading$.next(true);
    this.http.calculateValue(index)
      .pipe(finalize(() => this.calculateValueLoading$.next(false)))
      .subscribe({
        next: () => {
          this.calculateValueSuccess$.next(true);
          this.getAlreadyCalculatedFibonacciValues();
          this.getAlreadyCalculatedValuesIndexes();
        },
        error: () => this.calculateValueSuccess$.next(false)
      });
  }

  public toggleSelectedIndex(index: number): void {
    if (this.selectedIndexes$.value.includes(index)) {
      const indexToRemoval = this.selectedIndexes$.value.findIndex( (value: number) => value === index);
      const indexes: number[] = JSON.parse(JSON.stringify(this.selectedIndexes$.value));
      indexes.splice(indexToRemoval, 1)
      this.selectedIndexes$.next(indexes);
    } else {
      this.selectedIndexes$.value.push(index);
    }
  }
}
