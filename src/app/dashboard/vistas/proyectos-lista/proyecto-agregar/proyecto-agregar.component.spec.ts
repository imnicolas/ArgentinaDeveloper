import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoAgregarComponent } from './proyecto-agregar.component';

describe('ProyectoAgregarComponent', () => {
  let component: ProyectoAgregarComponent;
  let fixture: ComponentFixture<ProyectoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
