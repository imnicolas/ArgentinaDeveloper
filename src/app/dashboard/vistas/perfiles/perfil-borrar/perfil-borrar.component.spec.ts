import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBorrarComponent } from './perfil-borrar.component';

describe('PerfilBorrarComponent', () => {
  let component: PerfilBorrarComponent;
  let fixture: ComponentFixture<PerfilBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
