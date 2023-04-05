import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentosComponent } from './talentos.component';

describe('TalentosComponent', () => {
  let component: TalentosComponent;
  let fixture: ComponentFixture<TalentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
