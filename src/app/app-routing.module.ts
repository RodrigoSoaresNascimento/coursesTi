import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'coursesTi'},
  {
    path: 'coursesTi',
    loadChildren: () => import('./courses-ti/courses-ti.module').then(m => m.CoursesTiModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
