import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-notices',
  templateUrl: './cards-notices.component.html',
  styleUrls: ['./cards-notices.component.scss']
})
export class CardsNoticesComponent implements OnInit {

  infoCardNotices=[
    {
      'imageCard':'../../../../assets/images/banners/covid.png',
      'title':'¿Cómo los robots mexicanos están apoyando ante el COVID-19?',
      'parrafo':'Hay empresas en el país que están desarrollando soluciones innovadoras que no hubiesen sido ...',
      'text1':'Alaín Castillo',
      'text2':'.',
      'text3':'Nov 28, 2021',
    },
    {
      'imageCard':'../../../../assets/images/banners/industria.png',
      'title':'La industria de la manufactura aditiva en México',
      'parrafo':'El sector sigue experimentando un crecimiento saludable.',
      'text1':'Alaín Castillo',
      'text2':'.',
      'text3':'Nov 28, 2021',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
