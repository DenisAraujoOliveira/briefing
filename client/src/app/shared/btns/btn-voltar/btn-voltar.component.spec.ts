import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnVoltarComponent } from './btn-voltar.component';

describe('BtnVoltarComponent', () => {
  let component: BtnVoltarComponent;
  let fixture: ComponentFixture<BtnVoltarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnVoltarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
