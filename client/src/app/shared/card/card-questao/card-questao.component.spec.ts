import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuestaoComponent } from './card-questao.component';

describe('CardQuestaoComponent', () => {
  let component: CardQuestaoComponent;
  let fixture: ComponentFixture<CardQuestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardQuestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
