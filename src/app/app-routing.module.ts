import { NavigationRoutingModule } from './dashboard/navigation/navigation-routing.module';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { LoginComponent } from './vistas/login/login.component';
import { PortalEmpleoComponent } from './vistas/portal-empleo/portal-empleo.component';
import { ProyectosComponent } from './vistas/proyectos/proyectos.component';
import { ComunidadComponent } from './vistas/comunidad/comunidad.component';
import { HomeComponent } from './vistas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './vistas/container/container.component';

const routes: Routes = [
  //home
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./vistas/home/home.module').then(m => m.HomeModule)
      },
      { path: 'comunidad', component: ComunidadComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'portal-empleo', component: PortalEmpleoComponent },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },

  { path: 'login', component: LoginComponent},
  {
    path: 'admin',
    loadChildren: () =>
      import('./dashboard/navigation/navigation.module').then(m => m.NavigationModule)
  },
  { path: 'proyecto-editar', loadChildren: () => import('./dashboard/vistas/proyectos-lista/proyecto-editar/proyecto-editar.module').then(m => m.ProyectoEditarModule) },
  { path: 'perfil-borrar', loadChildren: () => import('./dashboard/vistas/perfiles/perfil-borrar/perfil-borrar.module').then(m => m.PerfilBorrarModule) },
  { path: 'perfil-agregar', loadChildren: () => import('./dashboard/vistas/perfiles/perfil-agregar/perfil-agregar.module').then(m => m.PerfilAgregarModule) },
  { path: 'proyecto-agregar', loadChildren: () => import('./dashboard/vistas/proyectos-lista/proyecto-agregar/proyecto-agregar.module').then(m => m.ProyectoAgregarModule) },
  { path: 'proyecto-borrar', loadChildren: () => import('./dashboard/vistas/proyectos-lista/proyecto-borrar/proyecto-borrar.module').then(m => m.ProyectoBorrarModule) },
  { path: 'tecnologias', loadChildren: () => import('./dashboard/vistas/tecnologias/tecnologias.module').then(m => m.TecnologiasModule) },
  { path: 'tecnologias-crear', loadChildren: () => import('./dashboard/vistas/tecnologias/tencnologia-crear/tencnologia-crear.module').then(m => m.TencnologiaCrearModule) },
  { path: 'tecnologias-borrar', loadChildren: () => import('./dashboard/vistas/tecnologias/tencnologia-borrar/tencnologia-borrar.module').then(m => m.TencnologiaBorrarModule) },
  { path: 'tecnologias-editar', loadChildren: () => import('./dashboard/vistas/tecnologias/tencnologia-editar/tencnologia-editar.module').then(m => m.TencnologiaEditarModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
