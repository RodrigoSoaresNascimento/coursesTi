import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesTiRoutingModule } from './courses-ti-routing.module';
import { CoursesTiComponent } from './containers/courses-ti/courses-ti.component';
import { CoursesTiFormComponent } from './containers/courses-ti-form/courses-ti-form.component';
import { CoursesTiListComponent } from './components/courses-ti-list/courses-ti-list.component';



@NgModule({
  declarations: [
    CoursesTiComponent,
    CoursesTiFormComponent,
    CoursesTiListComponent
  ],
  imports: [
    CommonModule,
    CoursesTiRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class CoursesTiModule { }
