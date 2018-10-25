import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewChecked {

  newsList: Array<any> = [];
  readyState = false;

  constructor(
    private newsService: SharedService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    // if (this.newsList.length === 0) {
    //   this.newsService.currentNews.subscribe((news) => {
    //     console.log(news);
    //     this.readyState = true;
    //     return this.newsList = news.items;
    //   });
    // }
  }

}
