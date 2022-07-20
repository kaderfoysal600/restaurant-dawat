import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SwiperModule
  ],
  exports: [TeamComponent],
})
export class TeamModule { }
