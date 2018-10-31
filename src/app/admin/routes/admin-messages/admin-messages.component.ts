import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Message } from './message';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {

  messages: Array<Message> = [];
  viewMsg: Message;
  constructor(
    private admin: AdminService
  ) { }

  ngOnInit() {
    const obs = this.admin.getMessages();
    obs.subscribe((res: Array<Message>) => {
      this.messages = res;
    });
  }

  getMail(mailID: string) {
    this.messages.forEach(v => {
      if (v._id === mailID) {
        this.viewMsg = v;
        this.admin.markRead(v._id).subscribe(() => this.viewMsg.status = true)
      }
    })
  }

}
