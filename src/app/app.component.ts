import { Component, OnInit } from '@angular/core';
import { Educacion } from './dominio/educacion';
import { Experiencia } from './dominio/experiencia';
import { Objetivos } from './dominio/objetivos';
import { Persona } from './dominio/personas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyCv';
  educacionList: Array<Educacion> = new Array<Educacion>;
  experienciaList: Array<Experiencia> = new Array<Experiencia>;
  objetivo: Objetivos = new Objetivos("");
  personas?: Array<Persona>;
  constructor() {
  }
  ngOnInit() {

    this.loadEducacion();
    this.loadExperiencia();
    this.loadObjetivos();
    this.loadPersonas();
  }

  loadEducacion() {
    const valor = "+ Tecnico en Mantenimiento y Reparacion de PC\n" +
      "+ en Desarrollo de Aplicaciones JAVA\n" +
      "+ en Gestion de Base de Datos ORACLE\n";
    this.educacionList
      .push(new Educacion("Universidad Mariano Galvez", "2016-2022", ["Octavo Semestre en Ingeniería en Sisternas"]));
    this.educacionList
      .push(new Educacion("INTECAP", "2015-2017", valor.split("\n"))
      );

  }

  loadExperiencia() {
    this.experienciaList.push(new Experiencia("Vicer Solutions (Colombia)", "2022",
      "Ayude al análisis, diseño y desarrollo de la ampliación de funcionalidades de un sistema de facturación en línea con una estructura de microservicios, para una empresa colombiana. En mis labores utilice java, Springboot, git, Azure dev ops , NoSQL, Angular y Amazon web "));
    
      this.experienciaList.push(new Experiencia("Jumay", " 2020 - 2021",
      "Realice una migración de base de datos, cree reportes"
      + "con Jasper Report, solucione bugs en desarrollos web "
      + "hechos en Angular y servicios web hechos en java EE. "
      + "Para G&T Continental. "));

    this.experienciaList.push(new Experiencia("Avantia Consultores", "2018 - 2020",
      "Diseñe y desarrolle un sistema de Servicios Web "
      + "hecho en java EE para un portal web de autogestión "
      + "de usuarios corporativos en Claro, con su "
      + "correspondiente diseño e implementación de bases de"
      + "datos en Oracle, y desarrollé un portal web interno"
      + "Dashboard. ")
    );
  }

  loadObjetivos() {
    this.objetivo = new Objetivos("Aceptar nuevos retos en el área de desarrollo y diseño de" +
      "software. Con el propósito de: aumentar las oportunidades " +
      "para utilizar nuevos patrones de diseño, seguir mejorando " +
      "en la implernentación de buenas prácticas y ampliar el " +
      "abanico de herramientas con las cuales construir " +
      "desarrollos más profesionales.");
  }

  loadPersonas() { }
}
