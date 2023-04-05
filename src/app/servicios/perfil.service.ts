import { PerfilDTO } from '../modelos/dto/perfilDTO';
import { PerfilRequest } from '../modelos/request/perfilRequest';
import { Perfil } from './../modelos/perfil';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from'rxjs/operators'
const URL = 'http://localhost:8080/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  public getPerfiles(): Observable<PerfilDTO[]> {
    return this.http.get<PerfilDTO[]>(URL + '/traer');
  }

  public getPerfilById(id: number): Observable<PerfilDTO> {
    return this.http.get<PerfilDTO>(URL + '/traer/' + id);
  }

  public updatePerfil(id: number, perfil: PerfilDTO): Observable<PerfilDTO> {
    return this.http.put<PerfilDTO>(URL + '/editar/' + id, perfil)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

  public createPerfil(perfil: PerfilRequest): Observable<PerfilRequest> {
    return this.http.post<PerfilRequest>(URL + '/crear', perfil)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

  public deletePerfil(id: number): Observable<Perfil> {
    return this.http.delete<Perfil>(URL + '/borrar/' + id)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

}
