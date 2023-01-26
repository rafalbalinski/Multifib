import { Injectable } from "@angular/core";
import { BehaviorSubject, finalize, Subject } from "rxjs";
import { HttpAppService } from "../services/http-app.service";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  readonly alreadyCalculatedFibonacciValues$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  readonly alreadyCalculatedFibonacciValuesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  readonly alreadyCalculatedValuesIndexes$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  readonly alreadyCalculatedValuesIndexesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  readonly calculateValueLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly calculateValueSuccess$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpAppService) {}

  public getAlreadyCalculatedFibonacciValues(): void {
    this.alreadyCalculatedFibonacciValuesLoading$.next(true);
    this.http.getAlreadyCalculatedFibonacciValues()
      .pipe(finalize(() => this.alreadyCalculatedFibonacciValuesLoading$.next(false)))
      .subscribe((values: any) => this.alreadyCalculatedFibonacciValues$.next(values.data));
  }

  public getAlreadyCalculatedValuesIndexes(): void {
    this.alreadyCalculatedValuesIndexesLoading$.next(true);
    this.http.getAlreadyCalculatedValuesIndexes()
      .pipe(finalize(() => this.alreadyCalculatedValuesIndexesLoading$.next(false)))
      .subscribe((values: any) => this.alreadyCalculatedValuesIndexes$.next(values.data));
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
}
