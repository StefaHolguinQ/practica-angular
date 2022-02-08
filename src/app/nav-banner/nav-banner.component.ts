import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.scss']
})
export class NavBannerComponent implements OnInit {

  datosNavBanner = [
    {
      'titulo':'Mercadeo Automotríz',
      'url':'#'
    },
    {
      'titulo':'Manufactura',
      'url':'#'
    },
    {
      'titulo':'Tecnología de procesos',
      'url':'#'
    },
    {
      'titulo':'Seguridad industrial',
      'url':'#'
    },
    {
      'titulo':'Manejo de materiales',
      'url':'#'
    },
    {
      'titulo':'Sostenibilidad',
      'url':'#'
    },
    {
      'titulo':'Robótica',
      'url':'#'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
