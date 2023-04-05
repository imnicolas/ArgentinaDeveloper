import { ProyectoDTO } from './../../modelos/dto/proyectoDTO';
import { PerfilDTO } from './../../modelos/dto/perfilDTO';
import { Proyecto } from './../../modelos/proyecto';
import { ProyectoService } from './../../servicios/proyecto.service';
import { PerfilService } from './../../servicios/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, throttleTime } from 'rxjs/operators';
import { Perfil } from 'src/app/modelos/perfil';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  perfiles:PerfilDTO[]=[];
  proyectos:ProyectoDTO[]=[];
  private roles: string[] = [];
  isLoggedIn = false;
  usuario?: any;
  nombreUsuario: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private perfilService:PerfilService,
    private proyectoService:ProyectoService,
    private tokenService: TokenService,
    private router: Router) {}

  ngOnInit():void{
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.tokenService.getUser().token == null || undefined) {
      this.router.navigate([''])
    }else{
      this.usuario = this.tokenService.getUser()
      console.log(this.tokenService.getUser())
      console.log(this.tokenService.getToken())
    }

    this.obtenerPerfiles();
    this.obtenerProyectos();
  }

  salir():void{
  this.tokenService.signOut()
  window.location.reload();
  }

  obtenerPerfiles():void{
  this.perfilService.getPerfiles().subscribe(
    data => {
      this.perfiles = data;
      /* console.log(data); */
    });
  }

  obtenerProyectos():void{
  this.proyectoService.getProyectos().subscribe(
    data => {
      this.proyectos = data;
      /* console.log(data); */
    }
  );
  }

}
