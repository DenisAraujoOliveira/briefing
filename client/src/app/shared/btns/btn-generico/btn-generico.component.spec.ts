import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGenericoComponent } from './btn-generico.component';

describe('BtnGenericoComponent', () => {
  let component: BtnGenericoComponent;
  let fixture: ComponentFixture<BtnGenericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGenericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
