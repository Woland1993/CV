import { Component,HostListener} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { dominio } from '../config';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  isTransparent: boolean = false;
  isDescargando: boolean = false;
  isDisabled:boolean = false;
  dominio:string=dominio;

  constructor( private primengConfig: PrimeNGConfig) {
  }
  ngOnInit() {
    setTimeout(() => {
      this.isTransparent = true;
  }, 10000);
  }
  

 
  @HostListener('mousemove', ['$event'])
  onMouseMove() {
    this.isTransparent = false;
  }
  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.isTransparent = true;
  }

  addMessages() {
    this.isDescargando=true;
    this.isDisabled=true;
    setTimeout(() => {
      this.isDescargando = false;
      this.isDisabled=false;
  }, 4000);
}

endMessages(){
  this.isDescargando=false;
  this.isDisabled=false;
}

}
