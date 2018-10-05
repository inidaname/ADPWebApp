import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    private dataChange = new BehaviorSubject<object>({
        theAmt: null,
        viewAmt: null,
        state: false,
        purpose: null,
        Email: null,
        Name: null,
        user: null,
        Phone: null
    });

    private dataGotten = new BehaviorSubject<any>(null);
    private t = new BehaviorSubject<boolean>(false);
    currentStatus = this.dataChange.asObservable();
    currentTrigger = this.t.asObservable();
    currentData = this.dataGotten.asObservable();
    constructor() {}

    changeModalState(state: object) {
        this.dataChange.next(state);
    }

    sendData(data: any) {
        this.dataGotten.next(data);
    }

    triggerState(state: boolean) {
        this.t.next(state);
    }

}
