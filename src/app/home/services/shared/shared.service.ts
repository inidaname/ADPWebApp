import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    private trigger = new BehaviorSubject<object>({
        theAmt: null,
        viewAmt: null,
        state: false,
        purpose: null,
        Email: null,
        Name: null,
        user: null,
        Phone: null
    });
    currentStatus = this.trigger.asObservable();
    constructor() {}

    changeModalState(state: object) {
        this.trigger.next(state);
    }

}
