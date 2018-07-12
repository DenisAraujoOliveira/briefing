import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuestoesComponent } from './card-questoes.component';

describe('CardQuestoesComponent', () => {
  let component: CardQuestoesComponent;
  let fixture: ComponentFixture<CardQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
