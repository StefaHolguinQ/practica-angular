import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-sidebar',
  templateUrl: './cards-sidebar.component.html',
  styleUrls: ['./cards-sidebar.component.scss']
})
export class CardsSidebarComponent implements OnInit {

  infoCardSidebar=[
    {
      'imageCard':'../../../../assets/images/banners/famex.png',
      'title':'Famex 2021 cambia de sede por pandemia',
      'text1':'Alaín Castillo',
      'text2':'.',
      'text3':'Nov 28, 2021',
    },
    {
      'imageCard':'../../../../assets/images/banners/AIM3D.png',
      'title':'AIM3D presenta la innovadora impresora 3D de pellets ExAM 510',
      'text1':'Alaín Castillo',
      'text2':'.',
      'text3':'Nov 28, 2021',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
