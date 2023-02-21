import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LahatraSkillsRoutingModule } from './lahatra-skills-routing.module';
import { BodyComponent } from './components/body/body.component';


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    LahatraSkillsRoutingModule,
    NgOptimizedImage
  ]
})
export class LahatraSkillsModule { }
