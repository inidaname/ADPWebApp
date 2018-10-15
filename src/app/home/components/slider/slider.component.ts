import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideIndex = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }
  
  
  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  
  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n) {
    var i;
    var slides: any = document.getElementsByClassName("mySlides");
    var dots: any = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block"; 
    dots[this.slideIndex-1].className += " active";
  }
  btnClick(route: string) {
    this.router.navigateByUrl(route);
  }

}
