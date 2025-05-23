import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenderPrendasComponent } from './vender-prendas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: VenderPrendasComponent }
];

@NgModule({
  declarations: [
    VenderPrendasComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class VenderPrendasModule { }
