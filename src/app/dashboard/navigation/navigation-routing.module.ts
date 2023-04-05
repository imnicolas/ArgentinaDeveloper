import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    canActivate: [],
    children: [

      {
        path: '',
        loadChildren: () =>
          import('../vistas/bienvenida/bienvenida.module').then(
            m => m.BienvenidaModule
          )
      },
      {
        path: 'perfiles',
        loadChildren: () =>
          import('../vistas/perfiles/perfiles.module').then(
            m => m.PerfilesModule
          )
      },
      {
        path: 'perfiles-editar',
        loadChildren: () =>
          import('../vistas/perfiles/perfil-editar/perfil-editar.module').then(
            m => m.PerfilEditarModule
          )
      },
      {
        path: 'perfiles-agregar',
        loadChildren: () =>
          import('../vistas/perfiles/perfil-agregar/perfil-agregar.module').then(
            m => m.PerfilAgregarModule
          )
      },
      {
        path: 'proyectos',
        loadChildren: () =>
          import('../vistas/proyectos-lista/proyectos-lista.module').then(
            m => m.ProyectosListaModule)
      },
      {
        path: 'proyectos-editar',
        loadChildren: () =>
          import('../vistas/proyectos-lista/proyecto-editar/proyecto-editar.module').then(
            m => m.ProyectoEditarModule)
      },
      {
        path: 'proyectos-agregar',
        loadChildren: () =>
          import('../vistas/proyectos-lista/proyecto-agregar/proyecto-agregar.module').then(
            m => m.ProyectoAgregarModule)
      },
      {
        path: 'talentos',
        loadChildren: () =>
          import('../vistas/talentos/talentos.module').then(m => m.TalentosModule)
      },
      {
        path: 'tecnologias',
        loadChildren: () =>
          import('../vistas/tecnologias/tecnologias.module').then(m => m.TecnologiasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
