import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList: any;
  readyState = false;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.headLines().subscribe((news: any) => {
      this.readyState = true;
      console.log(news.items);
      return this.newsList = news.items;
    });
  }



}
