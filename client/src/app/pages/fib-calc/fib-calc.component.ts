import { Component, OnInit } from '@angular/core';
import { AppStoreService } from "../../store/app-store.service";

@Component({
  selector: 'fib-calc',
  templateUrl: './fib-calc.component.html',
  styleUrls: ['./fib-calc.component.scss']
})
export class FibCalcComponent implements OnInit {

  constructor(private store: AppStoreService) { }

  public ngOnInit(): void {
    this.store.getAlreadyCalculatedValuesIndexes();
    this.store.getAlreadyCalculatedFibonacciValues();
  }

}
