import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService, IUserLogin } from '../services/login';
declare const UIkit: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: IUserLogin = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService) {}

  onSubmit() {
    UIkit.modal('#loading-modal').show();

    this.loginService.login(this.user).subscribe({
      next: (response) => {
        UIkit.modal('#loading-modal').hide();
        UIkit.modal.alert(response.message || 'Connexion réussie !');
      },
      error: (err) => {
        UIkit.modal('#loading-modal').hide();
        UIkit.modal.alert(err.error.message || 'Erreur lors de la connexion.');
      }
    });
  }
}
