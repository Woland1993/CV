import { Component ,OnInit,Input } from '@angular/core';
import { Experiencia } from '../dominio/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
@Input()
experienciaList:Array<Experiencia>=[];
constructor(){}
  ngOnInit(){
    console.log(this.experienciaList);
   }

}
