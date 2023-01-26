import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CalculatedIndexes } from "../models/calculated-indexes";
import { CalculatedValuePayload } from "../models/calculated-value-payload";

@Injectable({
  providedIn: "root"
})
export class HttpAppService {

  constructor(private http: HttpClient) {}

  public getAlreadyCalculatedFibonacciValues(): Observable<any> {
    const url = '/api/values/current';
    return this.http.get<CalculatedValuePayload>(url)
  }

  public getAlreadyCalculatedValuesIndexes(): Observable<number[]> {
    const url = '/api/values/all';
    return this.http.get<CalculatedIndexes[]>(url)
      .pipe(map((calculatedIndexes: CalculatedIndexes[]) => calculatedIndexes.map((calculatedIndex: CalculatedIndexes) => calculatedIndex.number)));
  }

  public calculateValue(index: number): Observable<any> {
    const url = '/api/values';
    return this.http.post<any>(url, {index: index});
  }
}
