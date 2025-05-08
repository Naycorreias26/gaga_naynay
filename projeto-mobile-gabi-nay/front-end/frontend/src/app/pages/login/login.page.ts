import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  senha = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    if (!this.email || !this.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    this.apiService.login(this.email, this.senha).subscribe((res: any) => {
      if (res.user) {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/home']);
      } else {
        alert(res.error);
      }
    });
  }
}
