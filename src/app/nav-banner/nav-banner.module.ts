import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBannerComponent } from './nav-banner.component';



@NgModule({
  declarations: [
    /*NavBannerComponent*/
  ],
  imports: [
    CommonModule
  ]
})
export class NavBannerModule {
  static rootComponent = NavBannerComponent;
}
