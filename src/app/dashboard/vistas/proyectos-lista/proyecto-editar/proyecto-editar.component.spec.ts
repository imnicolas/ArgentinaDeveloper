import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEditarComponent } from './proyecto-editar.component';

describe('ProyectoEditarComponent', () => {
  let component: ProyectoEditarComponent;
  let fixture: ComponentFixture<ProyectoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
