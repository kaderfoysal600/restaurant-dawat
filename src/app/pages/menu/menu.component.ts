import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination ,Autoplay} from "swiper";

// install Swiper modules
SwiperCore.use([Pagination,Autoplay]);
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  onSwiper([swiper]: any) {
    console.log(swiper);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
