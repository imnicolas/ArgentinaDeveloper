import { MaterialModule } from 'src/app/material/material.module';
//Comunes
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vistas/home/home.component';
import { ComunidadComponent } from './vistas/comunidad/comunidad.component';
import { ProyectosComponent } from './vistas/proyectos/proyectos.component';
import { PortalEmpleoComponent } from './vistas/portal-empleo/portal-empleo.component';
import { NavbarComponent } from './comunes/navbar/navbar.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
import { TalentosMensualesComponent } from './vistas/home/talentos-mensuales/talentos-mensuales.component';
import { ContainerComponent } from './vistas/container/container.component';
//Modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { PresentacionComponent } from './vistas/home/presentacion/presentacion.component';
import { PortalTalentosComponent } from './vistas/home/portal-talentos/portal-talentos.component';
import { AboutComunidadComponent } from './vistas/comunidad/about-comunidad/about-comunidad.component';
import { QuienesSomosComponent } from './vistas/home/quienes-somos/quienes-somos.component';
import { ActividadesComponent } from './vistas/comunidad/actividades/actividades.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComunidadComponent,
    ProyectosComponent,
    PortalEmpleoComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    TalentosMensualesComponent,
    ContainerComponent,
    PresentacionComponent,
    PortalTalentosComponent,
    AboutComunidadComponent,
    QuienesSomosComponent,
    ActividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    CarouselModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
