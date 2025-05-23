import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CalendarioComponent }
];

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CalendarioModule { }
