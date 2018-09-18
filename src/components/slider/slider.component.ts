import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClick(route: string) {
    this.router.navigateByUrl(route);
  }

}
