import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesTiComponent } from './courses-ti/courses-ti.component';

const routes: Routes = [
  {path: '', component: CoursesTiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesTiRoutingModule { }
