import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalTalentosComponent } from './portal-talentos.component';

describe('PortalTalentosComponent', () => {
  let component: PortalTalentosComponent;
  let fixture: ComponentFixture<PortalTalentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalTalentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalTalentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
