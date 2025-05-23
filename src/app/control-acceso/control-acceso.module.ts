import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlAccesoComponent } from './control-acceso.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ControlAccesoComponent }
];

@NgModule({
  declarations: [
    ControlAccesoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ControlAccesoModule { }
