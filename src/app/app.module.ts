import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticesComponent } from './notices/notices.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { StickyComponent } from './sticky/sticky.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { NavBannerComponent } from './nav-banner/nav-banner.component';
import { NoticeBannerComponent } from './notice-banner/notice-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerHomeComponent,
    NoticesComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    StickyComponent,
    NavBannerComponent,
    NoticeBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
