import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalEmpleoComponent } from './portal-empleo.component';

describe('PortalEmpleoComponent', () => {
  let component: PortalEmpleoComponent;
  let fixture: ComponentFixture<PortalEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalEmpleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
