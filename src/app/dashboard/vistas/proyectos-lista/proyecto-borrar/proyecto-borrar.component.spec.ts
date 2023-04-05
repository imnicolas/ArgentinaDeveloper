import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoBorrarComponent } from './proyecto-borrar.component';

describe('ProyectoBorrarComponent', () => {
  let component: ProyectoBorrarComponent;
  let fixture: ComponentFixture<ProyectoBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
