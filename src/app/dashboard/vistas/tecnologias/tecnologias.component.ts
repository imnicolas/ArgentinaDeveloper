import { TencnologiaEditarComponent } from './tencnologia-editar/tencnologia-editar.component';
import { TencnologiaCrearComponent } from './tencnologia-crear/tencnologia-crear.component';
import { TencnologiaBorrarComponent } from './tencnologia-borrar/tencnologia-borrar.component';
import { Router } from '@angular/router';
import { Tecnologia } from './../../../modelos/tecnologia';
import { TecnologiaService } from './../../../servicios/tecnologia.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  displayedColumns: string[] = ['id','nombre','acciones'];
  dataSource= new MatTableDataSource<any>();
  tecnologias: Tecnologia[]=[];
  subscription: Subscription;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tecnologiaService: TecnologiaService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerTecnologias();
    this.subscription =  this.tecnologiaService.refresh$.subscribe(()=>{
      this.obtenerTecnologias()
    })
  }

  obtenerTecnologias(): void {
    this.tecnologiaService.getTecnologias().subscribe(
      data => {
        this.tecnologias = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data)
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogBorrar(tecnologia:Tecnologia): void {
    const dialogRef = this.dialog.open(TencnologiaBorrarComponent, {
      width: '250px',
    });
    localStorage.setItem("idTecnoBorrar",tecnologia.id!.toString());
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAgregar(): void {
    const dialogRef = this.dialog.open(TencnologiaCrearComponent, {
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogEditar(tecnologia:Tecnologia): void {
    const dialogRef = this.dialog.open(TencnologiaEditarComponent, {
      width: '60vw',
    });
    localStorage.setItem("idTecnoEditar",tecnologia.id!.toString());
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
