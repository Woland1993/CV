import { Component } from '@angular/core';
import { dominio } from '../config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  dominio:string=dominio;

}
