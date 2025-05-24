import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      // Aquí iría la lógica de autenticación
    }
  }

  login() {
    console.log("errr");
            // Aquí iría la lógica para cerrar sesión
            alert('Sesión de Mayra Sontay Ingreso correctamente');
            window.location.href = '/configurar-app';
        }
}