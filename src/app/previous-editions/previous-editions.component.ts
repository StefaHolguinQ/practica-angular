import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-editions',
  templateUrl: './previous-editions.component.html',
  styleUrls: ['./previous-editions.component.scss']
})
export class PreviousEditionsComponent implements OnInit {

  datosEditions=[
    {
      'image':'../../../../assets/images/banners/image-1.png',
      'text1':'Los faros de la',
      'text2':'Transformación',
      'text3':'digital',
      'text4':'Industrial'
    },
    {
      'image':'../../../../assets/images/banners/image-2.png',
      'text1':'Herramientas para la',
      'text2':'Nueva Normalidad',
      'text3':'Industrial'
    },
    {
      'image':'../../../../assets/images/banners/image-3.png',
      'text1':'Reseta para la',
      'text2':'Resiliencia',
      'text3':'empresarial'
    },
    {
      'image':'../../../../assets/images/banners/image-4.png',
      'text1':'Coronavirus',
      'text2':'La industria vs',
      'text3':'Pandemia'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
