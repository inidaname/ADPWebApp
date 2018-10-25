import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './services/shared/shared.service';
import { ModalService } from './services/modals/modals.service';
import { NewsService } from './services/news/news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  activateModal = true;
  theState: Boolean = false;
  objectData: object;
  viewAmt: any;
  theRef: number = Math.floor((Math.random() * 1000000000) + 1);
  router: string;
  newsA: boolean;

  constructor(
    private route: Router,
    private share: SharedService,
    private news: NewsService,
    private modalService: ModalService) {
    this.route.events.subscribe(() => this.router = this.route.url);
  }

  ngOnInit() {
    this.share.currentStatus.subscribe((obj: any) => this.activateModal = obj.state);
  }

  ngDoCheck() {
    if (!this.newsA) {
      const obs = this.news.headLines();
      obs.subscribe((news: any) => {
        this.share.newsContent(news);
      });
      console.log('home');
      this.newsA = true;
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  toggleModal(theCon: string, shwAmt: string) {
    this.objectData = {
      theAmt: theCon,
      viewAmt: shwAmt,
      state: true,
      purpose: 'Donation'
    };
    this.share.changeModalState(this.objectData);
    this.share.triggerState(true);
    this.openModal('app-payment');
  }
}
