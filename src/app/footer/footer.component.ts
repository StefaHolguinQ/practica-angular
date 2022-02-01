import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  datosFooter=[
    {
      'title':'CATEGORÍAS',
      'url':'#'
    },
    {
      'title':'EVENTOS',
      'url':'#'
    },
    {
      'title':'EDICIONES',
      'url':'#'
    },
    {
      'title':'SUSCRIPCIÓN',
      'url':'#'
    }
  ]

  socialFooter=[
    {
      'follow':'20K',
      'icon': 'icon-icon-facebook',
      'url': '#'
    },
    {
      'follow':'69K',
      'icon': 'icon-icon-linkedin2',
      'url': '#'
    },
    {
      'follow':'11K',
      'icon': 'icon-icon-youtube2',
      'url': '#'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
