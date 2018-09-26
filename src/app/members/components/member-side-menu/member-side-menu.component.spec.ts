import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberSideMenuComponent } from './member-side-menu.component';

describe('MemeberSideMenuComponent', () => {
    let component: MemberSideMenuComponent;
    let fixture: ComponentFixture<MemberSideMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MemberSideMenuComponent]
        })
        .compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(MemberSideMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
