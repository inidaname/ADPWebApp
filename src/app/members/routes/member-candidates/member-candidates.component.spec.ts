import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCandidatesComponent } from './member-candidates.component';

describe('MemberCandidatesComponent', () => {
  let component: MemberCandidatesComponent;
  let fixture: ComponentFixture<MemberCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
