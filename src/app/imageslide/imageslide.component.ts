import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-imageslide',
  templateUrl: './imageslide.component.html',
  styleUrls: ['./imageslide.component.scss']
})
export class ImageslideComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
  
  
    pullDrag: true,
  mouseDrag: true,
    dots: true,
    navSpeed: 100,
    
    smartSpeed:500, 
    responsiveRefreshRate : 200,
    responsive: {
      0: {
        items: 1, autoplay: true, loop: true, autoplaySpeed: 100, navSpeed:100
      },
      600: {
        items: 2, autoplay: true, loop: true, autoplaySpeed: 100,navSpeed:150
      },
      740: {
        items: 3, autoplay: true, loop: true, autoplaySpeed: 200, navSpeed:130,
      },
      1000: {
        items: 1, autoplay: true, loop: true, autoplaySpeed: 100, navSpeed:200
      }
    },
    nav: true
  }

}
