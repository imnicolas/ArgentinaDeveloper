import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(private http: HttpClient) {}
      public getUserStatus(): Observable<boolean> {
        return this.isUserLogged.asObservable();
      }

      public setUserStatus(value: boolean): void {
        this.isUserLogged.next(value);
      }

      ngOnInit() {
      }
}
