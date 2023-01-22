import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpAppService {

  constructor(private http: HttpClient) {}

  public getAlreadyCalculatedFibonacciValues(): Observable<any> {
    const url = '/api/values/current';
    return this.http.get<any>(url)
  }

  public getAlreadyCountedValuesIndexes(): Observable<any> {
    const url = '/api/values/all';
    return this.http.get<any>(url)
  }

  public calculateValue(index: number): Observable<any> {
    const url = '/api/values';
    return this.http.post<any>(url, index);
  }
}
