import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencnologiaBorrarComponent } from './tencnologia-borrar.component';

describe('TencnologiaBorrarComponent', () => {
  let component: TencnologiaBorrarComponent;
  let fixture: ComponentFixture<TencnologiaBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencnologiaBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TencnologiaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
