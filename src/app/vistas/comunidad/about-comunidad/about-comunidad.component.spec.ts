import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComunidadComponent } from './about-comunidad.component';

describe('AboutComunidadComponent', () => {
  let component: AboutComunidadComponent;
  let fixture: ComponentFixture<AboutComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
