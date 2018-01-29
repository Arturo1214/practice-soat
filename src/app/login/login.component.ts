import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Iniciar Sesion';
  model:any = {};
  error = '';
  constructor(private router: Router,
        private autenticationService: AuthenticationService) { }

  ngOnInit() {
    this.autenticationService.logout();
  }

  login() {
    this.autenticationService.login(this.model.username,
        this.model.password)
        .subscribe(result => {
          console.log(result);
          const token = result.id_token;
          const username =  this.model.username;
          if (token) {
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
            this.router.navigate(['/']);
          } else {
            this.error = 'Usuario o Contraseña Incorrecta';
          }
        }, (err) => {
          this.error = 'Usuario o Contraseña Incorrecta';
        });
  }

}
