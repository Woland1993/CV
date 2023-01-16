import { Component, OnInit } from '@angular/core';
import { Educacion } from './dominio/educacion';
import { Experiencia } from './dominio/experiencia';
import { Objetivos } from './dominio/objetivos';
import { Persona } from './dominio/personas';
import { Perfil } from './dominio/perfil';

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
  perfil: Perfil =new Perfil("");
  personas?: Array<Persona>;
  constructor() {
  }
  ngOnInit() {
    this.loadEducacion();
    this.loadExperiencia();
    this.loadObjetivos();
    this.loadPerfil();
    this.loadPersonas();
    console.log(this.educacionList);
    console.log(this.experienciaList);
    console.log(this.objetivo);
    console.log(this.perfil);
  }

  loadEducacion() {
    const valor = "+ Técnico en Mantenimiento y Reparación de PC\n" +
      "+ Técnico en Desarrollo de Aplicaciones JAVA\n" +
      "+ Técnico en Gestión de Base de Datos ORACLE\n";
    this.educacionList
      .push(new Educacion("Universidad Mariano Gálvez", "2016-2022", ["Octavo semestre en Ingeniería en Sistemas"]));
    this.educacionList
      .push(new Educacion("INTECAP", "2015-2017", valor.split("\n"))
      );

  }

  loadExperiencia() {
    this.experienciaList.push(new Experiencia("Resumen","2018 - 2023","Mi experiencia incluye el desarrollo de sistemas de facturación en línea, sistemas de gestión de productos virtuales en empresas de telecomunicaciones además de haber trabajado con sistemas bancarios. Estoy especializado en el análisis y desarrollo de sistemas backend, pero también tengo conocimientos sólidos en el desarrollo frontend."));

    
    this.experienciaList.push(new Experiencia("Vicer Solutions (Colombia)", "2022",
      "Ayudé en el análisis, diseño y desarrollo de la ampliación de funcionalidades de un sistema de facturación en línea con una estructura de microservicios, para una empresa colombiana. En mis labores utilicé Java, Springboot, Git, Azure DevOps, NoSQL, Angular y Amazon Web Services."));
    
      this.experienciaList.push(new Experiencia("Jumay", " 2020 - 2021",
      "Realicé una migración de base de datos, creé reportes con Jasper Report, solucioné bugs en desarrollos web hechos en Angular y servicios web hechos en Java EE, para G&T Continental."));

    this.experienciaList.push(new Experiencia("Avantia Consultores", "2018 - 2020",
      "Diseñé y desarrollé un sistema de Servicios Web utilizando Java EE para un portal web de autogestión de usuarios corporativos para la empresa de telecomunicaciones Claro. Tuve a mi cargo el diseño e implementación de bases de datos en Oracle, y también desarrollé un Dashboard como portal web interno.")
    );
  }

  loadObjetivos() {
    this.objetivo = new Objetivos("Busco unirme a un equipo de desarrollo donde pueda continuar especializándome en el análisis y desarrollo de sistemas del lado del servidor (backend), aplicando mis habilidades y experiencia en proyectos de alto impacto, mientras expando mi conocimiento en el desarrollo de páginas web (frontend). Mi objetivo es llegar a ser un especialista en desarrollos backend y contribuir al crecimiento y éxito de la empresa.");
  }

  loadPerfil(){
    this.perfil= new Perfil("Soy un analista programador con experiencia en el desarrollo de sistemas de alto impacto. Mi experiencia incluye el desarrollo de sistemas de facturación en línea, sistemas de gestión de productos virtuales en empresas de telecomunicaciones y sistemas bancarios. Me he especializado en el análisis y desarrollo del lado del backend, pero también tengo conocimientos sólidos en el desarrollo del lado del frontend.");
  }
  loadPersonas() { }
}
