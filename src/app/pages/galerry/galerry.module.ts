import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalerryRoutingModule } from './galerry-routing.module';
import { GalerryComponent } from './galerry.component';


@NgModule({
  declarations: [
    GalerryComponent
  ],
  imports: [
    CommonModule,
    GalerryRoutingModule
  ],
  exports: [GalerryComponent],
})
export class GalerryModule { }
