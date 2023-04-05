import { UsuarioService } from './../../servicios/usuario.service';
import { TokenService } from 'src/app/servicios/token.service';
import { LoginService } from 'src/app/servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/modelos/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: Login = new Login('', '');
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];
  personaID?: number;
  ocultar: boolean = true;


  constructor(  private authService: LoginService,
    private tokenStorage: TokenService,
    private userStatus: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      if (this.tokenStorage.getToken() != null || undefined) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      } else {
        this.isLoggedIn = false;
      }
    }

    login(): void {
      const observer = {
        next: (data: any) => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.tokenStorage.updateID();
          this.tokenStorage.updateRoles();
        },
        error: (err: any) => {
          if (err.error.message === 'Bad Credentials') {
            this.errorMessage = 'Usuario y/o contraseña incorrectos.';
          } else if (err.status == 0) {
            this.errorMessage = 'Quejas con Nico Suarez.';
          } else {
            this.errorMessage = `${err.status}: ${err.error.message}`;
          }
          this.isLoginFailed = true;
        },
      };
      this.authService.login(this.form.email, this.form.password).subscribe(observer)
      this.router.navigate(['/admin'])

    }

    logout(): void {
      this.tokenStorage.signOut();
      this.isLoggedIn = false;
      this.isLoginFailed = false;
      this.userStatus.setUserStatus(false);
    }

}
