import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirBriefingComponent } from './inserir-briefing.component';

describe('InserirBriefingComponent', () => {
  let component: InserirBriefingComponent;
  let fixture: ComponentFixture<InserirBriefingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirBriefingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
