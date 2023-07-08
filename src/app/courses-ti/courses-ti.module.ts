import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesTiRoutingModule } from './courses-ti-routing.module';
import { CoursesTiComponent } from './courses-ti/courses-ti.component';



@NgModule({
  declarations: [
    CoursesTiComponent
  ],
  imports: [
    CommonModule,
    CoursesTiRoutingModule,
    AppMaterialModule,
    SharedModule
  ],
})
export class CoursesTiModule { }
