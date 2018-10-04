import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberTopProfileComponent } from './member-top-profile.component';

describe('TopProfileMemberComponent', () => {
    let component: MemberTopProfileComponent;
    let fixture: ComponentFixture<MemberTopProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MemberTopProfileComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MemberTopProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create ', () => {
        expect(component).toBeTruthy();
    });
});
