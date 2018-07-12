import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAvancarComponent } from './btn-avancar.component';

describe('BtnAvancarComponent', () => {
  let component: BtnAvancarComponent;
  let fixture: ComponentFixture<BtnAvancarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAvancarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAvancarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
