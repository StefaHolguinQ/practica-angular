import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerHomeComponent } from './banner-home.component';
import { NavBannerComponent } from '../nav-banner/nav-banner.component';
import { NavBannerModule } from '../nav-banner/nav-banner.module';
import { NoticeBannerComponent } from '../notice-banner/notice-banner.component';
import { NoticeBannerModule } from '../notice-banner/notice-banner.module';



@NgModule({
  declarations: [
    /*BannerHomeComponent*/
  ],
  imports: [
    CommonModule
  ]
})
export class BannerHomeModule { }
