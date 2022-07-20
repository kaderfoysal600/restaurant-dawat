import { Component, HostListener, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faEnvelope = faEnvelope;
  sideNav = false;
  fixed = false;
  status: boolean = false;
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * SideNavActive()
   * SideNavInactive()
   * headerFixed()
   */
  @HostListener('window:scroll')
  headerFixed(){
    if(window.scrollY > 100){
      this.fixed = true;
    }else{
      this.fixed = false;
    }
  }

clickEvent(){
    this.status = !this.status;       
}

  // sideNavActive(){
  //   this.sideNav = true;
  // }
  // sideNavInactive(){
  //   this.sideNav = false;
  // }
}
