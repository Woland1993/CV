import { Component } from '@angular/core';
import { dominio } from '../config';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  dominio: string=dominio;
  constructor(){

  }

}
