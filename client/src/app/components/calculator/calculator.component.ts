import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { AppStoreService } from "../../store/app-store.service";

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  indexFormControl: FormControl = new FormControl(undefined, {validators: [Validators.required, Validators.pattern("^[0-9]+$")]});

  constructor(public store: AppStoreService) { }

  public onSubmit(): void {
    this.store.calculateValue(this.indexFormControl.value);
    this.indexFormControl.setValue(undefined);
    this.indexFormControl.setErrors(undefined);
  }
}
