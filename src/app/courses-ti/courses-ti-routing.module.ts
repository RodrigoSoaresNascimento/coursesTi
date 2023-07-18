import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesTiComponent } from './courses-ti/courses-ti.component';
import { CoursesTiFormComponent } from './courses-ti-form/courses-ti-form.component';

const routes: Routes = [
  {path: '', component: CoursesTiComponent},
  {path: 'new', component: CoursesTiFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesTiRoutingModule { }
