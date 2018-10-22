import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecretariatComponent } from './admin-secretariat.component';

describe('AdminSecretariatComponent', () => {
  let component: AdminSecretariatComponent;
  let fixture: ComponentFixture<AdminSecretariatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSecretariatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSecretariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
