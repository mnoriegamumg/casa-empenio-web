import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'configurar-app',
    loadChildren: () => import('./configurar-app/configurar-app.module').then(m => m.ConfigurarAppModule)
  },
  { 
    path: 'admin-sucursal',
    loadChildren: () => import('./admin-sucursal/admin-sucursal.module').then(m => m.AdminSucursalModule)
  },
  { 
    path: 'control-acceso',
    loadChildren: () => import('./control-acceso/control-acceso.module').then(m => m.ControlAccesoModule)
  },
  { 
    path: 'vender-prendas',
    loadChildren: () => import('./vender-prendas/vender-prendas.module').then(m => m.VenderPrendasModule)
  },
  { 
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioModule)
  },
  { 
    path: 'valuador-productos',
    loadChildren: () => import('./valuador-productos/valuador-productos.module').then(m => m.ValuadorProductosModule)
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }