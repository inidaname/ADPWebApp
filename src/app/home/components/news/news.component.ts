import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList: Array<any> = [];
  readyState = false;

  constructor(
    private newsService: SharedService,
  ) { }

  ngOnInit() {
    if (this.newsList.length === 0) {
      this.newsService.currentNews.subscribe((news) => {
        this.readyState = true;
        return this.newsList = news.items;
      });
    }


  }

}
