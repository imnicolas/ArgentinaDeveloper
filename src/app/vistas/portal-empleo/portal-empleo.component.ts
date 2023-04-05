import { PerfilDTO } from './../../modelos/dto/perfilDTO';
import { Tecnologia } from 'src/app/modelos/tecnologia';
import { PerfilService } from './../../servicios/perfil.service';
import { Perfil } from './../../modelos/perfil';
import { TecnologiaService } from './../../servicios/tecnologia.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-portal-empleo',
  templateUrl: './portal-empleo.component.html',
  styleUrls: ['./portal-empleo.component.css']
})
export class PortalEmpleoComponent implements OnInit {

  tecnologias: Tecnologia[] = [];
  perfiles: PerfilDTO[];
  tecnologiasSeleccionadas: any[] = [];
  fruitCtrl = new FormControl('');
  addOnBlur = true;
  filteredFruits: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  subscription: Subscription;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;


  constructor(private tecnoService: TecnologiaService, private perfilService: PerfilService) {

    this.subscription = this.perfilService.refresh$.subscribe(() => {
      this.obtenerPerfiles();
    });

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  ngOnInit(): void {
    this.obtenerTecnologias();
    this.obtenerPerfiles();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  obtenerPerfiles(): void {
    this.perfilService.getPerfiles().subscribe(
      data => {
        this.perfiles = data
      })
  }
  obtenerTecnologias(): void {
    this.tecnoService.getTecnologias().subscribe(
      data => {
        this.tecnologias = data;
      }
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tecnologiasSeleccionadas.push(value);
      console.log(this.tecnologiasSeleccionadas)
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.tecnologiasSeleccionadas.indexOf(fruit);

    if (index >= 0) {
      this.tecnologiasSeleccionadas.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.tecnologiasSeleccionadas.push(event.option.viewValue);
    // this.perfiles.filter(data => data.tecnologias.forEach(element => this.tecnologiasSeleccionadas.some(e => e === element.nombre)) );
    //this.perfiles.filter(data => data.tecnologias.filter(e => e.nombre === 'C'))

    //const filteredData=this.perfiles.forEach(x=>x.tecnologias.filter(g => g.nombre === this.tecnologiasSeleccionadas.find(j =>j === g.nombre)))
    //console.log(filteredData);



    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    console.log(this.tecnologiasSeleccionadas)
    console.log(this.perfiles)
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
