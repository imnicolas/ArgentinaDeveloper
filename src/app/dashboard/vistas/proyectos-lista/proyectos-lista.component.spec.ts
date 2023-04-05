import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosListaComponent } from './proyectos-lista.component';

describe('ProyectosListaComponent', () => {
  let component: ProyectosListaComponent;
  let fixture: ComponentFixture<ProyectosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
