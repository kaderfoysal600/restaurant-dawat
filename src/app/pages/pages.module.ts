import { GalerryModule } from './galerry/galerry.module';
import { BlogModule } from './blog/blog.module';
import { TeamComponent } from './team/team.component';
import { FooterModule } from './../shared/components/footer/footer.module';
import { HeaderModule } from './../core/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AboutModule } from './about/about.module';
import { OfferModule } from './offer/offer.module';
import { MenuModule } from './menu/menu.module';
import { TeamModule } from './team/team.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    AboutModule,
    OfferModule,
    FooterModule,
    MenuModule,
    TeamModule,
    BlogModule,
    GalerryModule
  ]
})
export class PagesModule { }
