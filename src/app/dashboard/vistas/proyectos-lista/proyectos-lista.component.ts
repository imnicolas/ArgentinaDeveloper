import { ProyectoDTO } from './../../../modelos/dto/proyectoDTO';
import { Router } from '@angular/router';
import { Proyecto } from './../../../modelos/proyecto';
import { ProyectoService } from './../../../servicios/proyecto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ProyectoBorrarComponent } from './proyecto-borrar/proyecto-borrar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-proyectos-lista',
  templateUrl: './proyectos-lista.component.html',
  styleUrls: ['./proyectos-lista.component.css']
})
export class ProyectosListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'acciones'];
  dataSource= new MatTableDataSource<any>();
  proyectos:ProyectoDTO[]=[];
  subscription: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private proyectoService:ProyectoService,
    private router: Router,  public dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerProyectos();
    this.subscription =  this.proyectoService.refresh$.subscribe(()=>{
      this.obtenerProyectos();
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

  obtenerProyectos():void{
    this.proyectoService.getProyectos().subscribe(
      data => {
        this.proyectos = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        /* console.log(data); */
      }
    );
    }

    editarProyecto(proyecto: ProyectoDTO){
      localStorage.setItem("idProyecto",proyecto.id!.toString());
      this.router.navigate(["/admin/proyectos-editar"]);
    }

    irAgregar():void{
      this.router.navigate(["/admin/proyectos-agregar"])
    }

    openDialog(proyecto:ProyectoDTO): void {
      const dialogRef = this.dialog.open(ProyectoBorrarComponent, {
        width: '250px',
      });
      localStorage.setItem("idProyectoBorrar",proyecto.id!.toString());
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}
