import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Pagination ,Autoplay} from "swiper";

// install Swiper modules
SwiperCore.use([Pagination,Autoplay]);
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  onSwiper([swiper]: any) {
    console.log(swiper);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
