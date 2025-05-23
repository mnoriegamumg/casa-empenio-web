import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'casa-empenio-web';
}
