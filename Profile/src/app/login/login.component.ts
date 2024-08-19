import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onGuestLogin() {
    console.log("Iniciar sesión como Invitado");
    // Lógica para iniciar sesión como invitado
  }

  onTestLogin() {
    console.log("Iniciar sesión como Prueba");
    // Lógica para iniciar sesión como prueba
  }
}
