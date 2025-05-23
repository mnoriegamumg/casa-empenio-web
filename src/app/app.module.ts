import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ConfigurarAppComponent } from './configurar-app/configurar-app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GooterComponent } from './shared/gooter/gooter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
// Elimina la importación directa de AuthModule

@NgModule({
  declarations: [
    AppComponent,
    ConfigurarAppComponent,
    SidebarComponent,
    GooterComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Solo esto es necesario
    // Elimina AuthModule de aquí
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark'
        },
      },
      translation: {
        firstDayOfWeek: 1,
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        dateFormat: 'dd/MM/yyyy',
        today: 'Hoy',
        clear: 'Borrar'
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }