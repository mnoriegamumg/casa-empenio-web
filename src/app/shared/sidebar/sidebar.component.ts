import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showSidebar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showSidebar = !event.url.includes('/auth');
      });
  }

  logout() {
    console.log("errr");
            // Aquí iría la lógica para cerrar sesión
            alert('Sesión de Mayra Sontay cerrada correctamente');
            window.location.href = '/auth';
        }

}
