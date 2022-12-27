import { Component ,OnInit,Input} from '@angular/core';
import { Educacion } from '../dominio/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  @Input()
  eeducacionList:Array<Educacion>=[];

  constructor(){
    
  }
 ngOnInit(){
  console.log(this.eeducacionList);
 }
}
