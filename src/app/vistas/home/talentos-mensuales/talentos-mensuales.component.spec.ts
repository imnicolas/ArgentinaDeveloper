import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentosMensualesComponent } from './talentos-mensuales.component';

describe('TalentosMensualesComponent', () => {
  let component: TalentosMensualesComponent;
  let fixture: ComponentFixture<TalentosMensualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentosMensualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentosMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
