import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    private trigger = new BehaviorSubject<boolean>(false);
    currentStatus = this.trigger.asObservable();
    constructor() {}

    changeState(state: boolean) {
        this.trigger.next(state);
        console.log(state);
    }

}
