import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { SideMuneComponent } from './side-menu.component';
import { detectChanges } from '@angular/core/src/render3';

describe('SideMenuComponent', () => {
    let component: SideMuneComponent;
    let fixture: ComponentFixture<SideMuneComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideMuneComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideMuneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
