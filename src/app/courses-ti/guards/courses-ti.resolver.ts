import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CoursesTiService } from '../services/courses-ti.service';
import { inject } from '@angular/core';
import { CoursesTi } from '../model/courses-ti';



export const coursesTiResolver: ResolveFn<CoursesTi> = (route : ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  if(route.params && route.params['_idCourse']){
    return inject(CoursesTiService).findById(route.params['_idCourse']);
  }

  return ({idCourse: 0, courseName: '', institution: '', modality: '', period: '', city: '' }) ;
};
