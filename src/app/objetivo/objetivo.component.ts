import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrls: ['./objetivo.component.css']
})
export class ObjetivoComponent {
@Input()
cuerpo?:string;
}
