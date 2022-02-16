import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeBannerComponent } from './notice-banner.component';



@NgModule({
  declarations: [
    /*NoticeBannerComponent*/
  ],
  imports: [
    CommonModule
  ]
})
export class NoticeBannerModule { 
  static rootComponent = NoticeBannerComponent;
}
