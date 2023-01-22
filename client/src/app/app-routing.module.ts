import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibCalcComponent } from "./pages/fib-calc/fib-calc.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "calculator"},
  {path: 'calculator', component: FibCalcComponent},
  {path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
