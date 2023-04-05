import { PerfilDTO } from './../../../modelos/dto/perfilDTO';
import { PerfilBorrarComponent } from './perfil-borrar/perfil-borrar.component';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/modelos/perfil';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'acciones'];
  dataSource = new MatTableDataSource<any>();
  perfiles: PerfilDTO[] = [];
  subscription: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private perfilService: PerfilService, private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.obtenerPerfiles();

    this.subscription = this.perfilService.refresh$.subscribe(() => {
      this.obtenerPerfiles();
    })
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerPerfiles(): void {
    this.perfilService.getPerfiles().subscribe(
      data => {
        this.perfiles! = data;
        this.dataSource.data = data;
        this.dataSource.paginator! = this.paginator;
        this.dataSource.sort! = this.sort;
      });
  }

  editarPerfil(perfil: Perfil) {
    localStorage.setItem("idPerfil", perfil.id!.toString());
    this.router.navigate(["/admin/perfiles-editar"]);
  }

  openDialog(perfil: Perfil): void {
    const dialogRef = this.dialog.open(PerfilBorrarComponent, {
      width: '250px',
    });
    localStorage.setItem("idPerfilBorrar", perfil.id!.toString());
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  irAgregar(): void {
    this.router.navigate(["/admin/perfiles-agregar"])
  }
}
