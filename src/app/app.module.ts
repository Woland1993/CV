import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { StackDesarrolloComponent } from './stack-desarrollo/stack-desarrollo.component';
import { SkillsComponent } from './skills/skills.component';
import { MenubarComponent } from './menubar/menubar.component';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { PerfilComponent } from './perfil/perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ObjetivoComponent,
    EducacionComponent,
    ExperienciaComponent,
    StackDesarrolloComponent,
    SkillsComponent,
    MenubarComponent,
    PerfilComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
