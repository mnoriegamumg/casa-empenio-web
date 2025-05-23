import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSucursalComponent } from './admin-sucursal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdminSucursalComponent }
];

@NgModule({
  declarations: [
    AdminSucursalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdminSucursalModule { }
