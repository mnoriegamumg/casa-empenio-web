import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurarAppComponent } from './configurar-app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ConfigurarAppComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConfigurarAppModule { }
