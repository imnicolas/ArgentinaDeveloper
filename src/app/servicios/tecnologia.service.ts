import { Tecnologia } from './../modelos/tecnologia';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from'rxjs/operators'
const URL='http://localhost:8080/tecnologia'

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  public getTecnologias(): Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(URL+'/traer');
  }

  public createTecnologia(tecnologia:Tecnologia):Observable<Tecnologia>{
    return this.http.post<Tecnologia>(URL+'/crear', tecnologia)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

  public updateTecnologia(id:number, tecnologia:Tecnologia):Observable<Tecnologia>{
    return this.http.put<Tecnologia>(URL+'/editar/'+id, tecnologia)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }

  public deleteTecnologia(id:number): Observable<Tecnologia>{
    return this.http.delete<Tecnologia>(URL+'/borrar/'+id)
    .pipe(
      tap(()=> {
          this._refresh$.next();
      })
    );
  }
  public getTecnologiaById(id:number): Observable<Tecnologia>{
    return this.http.get<Tecnologia>(URL+'/traer/'+id);
  }
}
