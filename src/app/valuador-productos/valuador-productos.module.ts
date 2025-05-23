import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuadorProductosComponent } from './valuador-productos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ValuadorProductosComponent }
];

@NgModule({
  declarations: [
    ValuadorProductosComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ValuadorProductosModule { }
