import { Component ,OnInit,Input } from '@angular/core';
import { Experiencia } from '../dominio/experiencia';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

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
