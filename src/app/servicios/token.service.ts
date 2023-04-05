import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _personaID: number = 1;

  constructor(private http: HttpClient, private userStatus: UsuarioService) {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public updateRoles(): any {
    const userRoles = this.getUser().roles;
    if (userRoles.includes('ADMIN')) {
      this.userStatus.setUserStatus(true)
    } else {
      this.userStatus.setUserStatus(false)
    }
  }

  public updateID(): number {
    this._personaID = this.getUser().id;
    return this._personaID;
  }

  ngOnInit() {
    this.updateID();
  }
}
