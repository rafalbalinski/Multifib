import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { FibCalcComponent } from './pages/fib-calc/fib-calc.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HistoryComponent } from './components/history/history.component';
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AvailableIndexes } from "./components/available-indexes/available-indexes.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { LoadSpinnerComponent } from "./components/load-spinner/load-spinner.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatRippleModule,
  MatInputModule,
  MatChipsModule,
  MatListModule,
  MatTableModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    FibCalcComponent,
    ToolbarComponent,
    CalculatorComponent,
    HistoryComponent,
    AvailableIndexes,
    LoadSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
