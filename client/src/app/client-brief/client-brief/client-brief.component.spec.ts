import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBriefComponent } from './client-brief.component';

describe('ClientBriefComponent', () => {
  let component: ClientBriefComponent;
  let fixture: ComponentFixture<ClientBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
