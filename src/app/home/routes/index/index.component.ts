import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  newsList: any;

  constructor(
    private router: Router,
    // private news: NewsService
    ) { }

  ngOnInit() {
    this.router.events.subscribe((evnt) => {
      if (!(evnt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit() {
    // let headlines;
    // const obs = this.news.headLines();
    // obs.subscribe((news: any) => {
    //   news.items.forEach((element: any, io) => {
    //     const categories: Array<string> = element.categories;
    //     categories.find(function(v: string, i: number) {
    //       if (v === 'headlines') {
    //         return headlines = news.items.splice(0, io)[0];
    //       }
    //     });
    //   });
    //   this.newsList = headlines;
    // });
  }

  btnClick(route: string) {
    this.router.navigateByUrl(route);
  }

}
