import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencnologiaEditarComponent } from './tencnologia-editar.component';

describe('TencnologiaEditarComponent', () => {
  let component: TencnologiaEditarComponent;
  let fixture: ComponentFixture<TencnologiaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencnologiaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TencnologiaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
