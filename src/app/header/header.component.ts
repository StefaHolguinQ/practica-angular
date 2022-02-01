import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datosMenu=[
    {
      'titulo':'HOME',
      'url':'#'
    },
    {
      'titulo':'CATEGORÍAS',
      'url':'#'
    },
    {
      'titulo':'EVENTOS',
      'url':'#'
    },
    {
      'titulo':'EDICIONES',
      'url':'#'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  public openMenu: boolean = false;

  showMenu(): void {
    this.openMenu = !this.openMenu;
  }

}
