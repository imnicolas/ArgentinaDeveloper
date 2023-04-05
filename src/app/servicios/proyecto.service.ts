import { ProyectoRequest } from './../modelos/request/proyectoRequest';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';
import {tap} from'rxjs/operators'
import { ProyectoDTO } from '../modelos/dto/proyectoDTO';
const URL='http://localhost:8080/proyecto'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  public getProyectos():Observable<ProyectoDTO[]>{
    return this.http.get<ProyectoDTO[]>(URL+'/traer');
  }

  public getProyectoById(id:number): Observable<ProyectoDTO>{
    return this.http.get<ProyectoDTO>(URL+'/traer/'+id);
  }

  public updateProyectos(id:number, proyecto:ProyectoRequest):Observable<ProyectoRequest>{
    return this.http.put<ProyectoRequest>(URL+'/editar/'+id,proyecto)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

  public createProyectos(proyecto:Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(URL+'/crear',proyecto)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

  public deleteProyectos(id:number): Observable<Proyecto>{
    return this.http.delete<Proyecto>(URL+'/borrar/'+id)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

}
