import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  newsList: any;

  constructor(
    private router: Router,
    private news: NewsService
    ) { }

  ngOnInit() {
    let headlines;
    const obs = this.news.headLines();
    obs.subscribe((news: any) => {
      console.log(news.items);
      news.items.forEach((element: any, io) => {
        const categories: Array<string> = element.categories;
        categories.find(function(v: string, i: number) {
          if (v === 'headlines') {
            return headlines = news.items.splice(0, io)[0];
          }
        });
      });
      this.newsList = headlines;
    });

    this.router.events.subscribe((evnt) => {
      if (!(evnt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  btnClick(route: string) {
    this.router.navigateByUrl(route);
  }

}
