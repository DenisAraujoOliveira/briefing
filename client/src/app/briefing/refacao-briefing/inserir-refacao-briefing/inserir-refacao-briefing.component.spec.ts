import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirRefacaoBriefingComponent } from './inserir-refacao-briefing.component';

describe('InserirRefacaoBriefingComponent', () => {
  let component: InserirRefacaoBriefingComponent;
  let fixture: ComponentFixture<InserirRefacaoBriefingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirRefacaoBriefingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirRefacaoBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
