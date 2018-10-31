import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../../routes/admin-messages/message';
import { AdminMember } from '../../Interface/admin';

@Injectable({
    providedIn: 'root'
})

export class AdminStatus {
    private checkAdmin = new BehaviorSubject<boolean>(false);
    private checkRequest = new BehaviorSubject<boolean>(false);
    private countMsg = new BehaviorSubject<Array<Message>>([]);
    private countAdmin = new BehaviorSubject<Array<AdminMember>>([]);
    adminStats = this.checkAdmin.asObservable();
    request = this.checkRequest.asObservable();
    msgUnread = this.countMsg.asObservable();
    adminInActive = this.countAdmin.asObservable();


    inActiveAdmins(admins: Array<AdminMember>) {
        this.countAdmin.next(admins);
    }

    AllMsg(messages: Array<Message>) {
        this.countMsg.next(messages);
    }

    setAdminStatus(isAdmin: boolean) {
        this.checkAdmin.next(isAdmin);
    }

    adminRequest(request: boolean) {
        this.checkRequest.next(request);
    }
}
