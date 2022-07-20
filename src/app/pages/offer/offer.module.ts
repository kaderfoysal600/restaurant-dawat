import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    OfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SwiperModule
  ],
  exports: [OfferComponent],
})
export class OfferModule { }
