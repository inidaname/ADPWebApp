import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drag-one',
  templateUrl: './drag-one.component.html',
  styleUrls: ['./drag-one.component.scss']
})
export class DragOneComponent {

  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  imgs: any = [
    '/assets/slide.jpg'
  ];
  avatars = this.imgs.map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: x,
      title: `${num}`
    };
  });
 
  constructor(private router: Router) { }
 
  indexChanged(index) {
    console.log(index);
  }
  btnClick(route: string) {
    this.router.navigateByUrl(route);
  }

}