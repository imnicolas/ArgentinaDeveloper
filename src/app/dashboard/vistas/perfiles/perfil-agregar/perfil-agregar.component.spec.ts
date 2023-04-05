import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAgregarComponent } from './perfil-agregar.component';

describe('PerfilAgregarComponent', () => {
  let component: PerfilAgregarComponent;
  let fixture: ComponentFixture<PerfilAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
