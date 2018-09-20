import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionTrackingComponent } from './election-tracking.component';

describe('ElectionTrackingComponent', () => {
  let component: ElectionTrackingComponent;
  let fixture: ComponentFixture<ElectionTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
