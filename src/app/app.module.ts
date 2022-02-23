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
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsSidebarComponent } from './cards-sidebar/cards-sidebar.component';
import { MoreReadComponent } from './more-read/more-read.component';
import { CardsNoticesComponent } from './cards-notices/cards-notices.component';
import { PreviousEditionsComponent } from './previous-editions/previous-editions.component';
import { StickyEditionComponent } from './sticky-edition/sticky-edition.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerHomeComponent,
    CardsSidebarComponent,
    NoticesComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    StickyComponent,
    MoreReadComponent,
    NavBannerComponent,
    NoticeBannerComponent,
    SidebarComponent,
    CardsNoticesComponent,
    PreviousEditionsComponent,
    StickyEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
