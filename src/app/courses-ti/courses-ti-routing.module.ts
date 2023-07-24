import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesTiComponent } from './containers/courses-ti/courses-ti.component';
import { CoursesTiFormComponent } from './containers/courses-ti-form/courses-ti-form.component';
import { coursesTiResolver } from './guards/courses-ti.resolver';

const routes: Routes = [
  {path: '', component: CoursesTiComponent},
  {path: 'new', component: CoursesTiFormComponent, resolve:{courseTi: coursesTiResolver}},
  {path: 'edit/:_idCourse', component: CoursesTiFormComponent, resolve:{courseTi: coursesTiResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesTiRoutingModule { }
