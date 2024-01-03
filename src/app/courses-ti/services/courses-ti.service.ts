import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CoursesTi } from '../model/courses-ti';
import { delay, first } from 'rxjs';
import { Period } from '../model/enums/Period';
import { Modality } from '../model/enums/Modality';
import {HttpParams} from "@angular/common/http";
import { CoursesTiPage } from '../model/course-ti-page';

@Injectable({
  providedIn: 'root'
})
export class CoursesTiService {

  private API = '/cursos';


  constructor(private httpCliente: HttpClient) { }

  findAll(page = 0, pageSize = 10) {
    return this.httpCliente.get<CoursesTiPage>(`${this.API}/findPages`, {params: {page, pageSize}})
    .pipe(
      first(),
      delay(5000)
    );
  }

  save(courseTi: Partial<CoursesTi>, period:Period, modality: Modality){



    if(courseTi.idCourse !== 0){
      console.log('update');
      let idCourseTi = courseTi.idCourse!;
      return this.update(courseTi, period, modality, idCourseTi);
    }
    console.log(courseTi.idCourse+"teste");
    return this.create(courseTi, period, modality);
  }

  findById(idCourse: number){
    console.log(idCourse);
    return this.httpCliente.get<CoursesTi>(`${this.API}/find-by-id/${idCourse}`);
  }

  private create (courseTi: Partial<CoursesTi>, period:Period, modality: Modality){

    const params = {period: period, modality: modality}

    return this.httpCliente.post<CoursesTi>(`${this.API}/add`, courseTi, {params})
    .pipe(first());
  }

  private update (courseTi: Partial<CoursesTi>, period:Period, modality: Modality, idCourse: number){

    const params = {period: period, modality: modality, idCourse: idCourse};

    if(params !== null){
      console.log(params);
    }

    return this.httpCliente.put<CoursesTi>(`${this.API}/update-course`, courseTi, {params: params} ).pipe(first());
  }

  remove (idCourse: number){
    return this.httpCliente.delete(`${this.API}/delete/${idCourse}`).pipe(first());
  }
}
