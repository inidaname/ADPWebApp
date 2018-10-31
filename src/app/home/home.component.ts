import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './services/shared/shared.service';
import { ModalService } from './services/modals/modals.service';
import { NewsService } from './services/news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activateModal = true;
  theState: Boolean = false;
  objectData: object;
  viewAmt: any;
  theRef: number;
  router: string;
  newsA: boolean;
  loading: boolean;
  bdNtwk: string;

  constructor(
    private route: Router,
    private share: SharedService,
    private news: NewsService,
    private modalService: ModalService) {
    this.route.events.subscribe(() => this.router = this.route.url);
  }

  ngOnInit() {
    this.loading = true;
    this.share.currentStatus.subscribe((obj: any) => this.activateModal = obj.state);
    const obs = this.news.headLines();
    obs.subscribe((news: any) => {
      this.share.newsContent(news);
      this.loading = false;
    }, (err) => {
      this.bdNtwk = 'This is taking longer than expected, you may have lost acces to the network';
    });
    this.newsA = true;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  toggleModal(fullAmt: string, shwAmt: string) {
    this.theRef = Math.floor((Math.random() * 1000000000) + 1);
    this.objectData = {
      Name: '',
      Email: '',
      Phone: '',
      theAmt: fullAmt,
      viewAmt: shwAmt,
      state: true,
      purpose: 'Donation'
    };
    this.share.changeModalState(this.objectData);
    this.share.triggerState(true);
    this.openModal('app-payment');
  }
}
