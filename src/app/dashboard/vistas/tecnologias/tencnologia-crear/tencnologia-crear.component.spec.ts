import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencnologiaCrearComponent } from './tencnologia-crear.component';

describe('TencnologiaCrearComponent', () => {
  let component: TencnologiaCrearComponent;
  let fixture: ComponentFixture<TencnologiaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencnologiaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TencnologiaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
