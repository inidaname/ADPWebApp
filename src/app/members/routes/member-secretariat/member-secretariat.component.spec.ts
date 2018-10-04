import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSecretariatComponent } from './member-secretariat.component';

describe('MemberSecretariatComponent', () => {
  let component: MemberSecretariatComponent;
  let fixture: ComponentFixture<MemberSecretariatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSecretariatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSecretariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
