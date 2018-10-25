import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Message } from './message';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {

  fullName: string;
  subject: string;
  message: string;
  tags: string;
  status: string;
  dateSent: Date;

  constructor(
    private admin: AdminService
  ) { }

  ngOnInit() {
    const obs = this.admin.getMessages();
    obs.subscribe((res: Message) => {
      this.fullName = res.fullName;
      this.subject = res.subject;
      this.message = res.message;
      this.status = (res.status === true) ? 'unread' : 'read';
      this.dateSent = res.dateCreated;
    })
  }

}
