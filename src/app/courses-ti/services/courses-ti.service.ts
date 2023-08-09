import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CoursesTi } from '../model/courses-ti';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesTiService {

  private API = '/cursos';

  constructor(private httpCliente: HttpClient) { }

  findAll() {
    return this.httpCliente.get<CoursesTi[]>(`${this.API}/findAll`)
    .pipe(
      first(),
      delay(5000)
    );
  }

  save(course: Partial<CoursesTi>){
    if(course.idCourse){
      this.update(course);
    }
    console.log('save');
    return this.create(course);
  }

  findById(_idCourse: number){
    console.log(_idCourse);
    return this.httpCliente.get<CoursesTi>(`${this.API}/find-by-id/${_idCourse}`);
  }

  private create (courseTi: Partial<CoursesTi>){
    return this.httpCliente.post<CoursesTi>(`${this.API}/add`, courseTi)
    .pipe(first());
  }

  private update (courseTi: Partial<CoursesTi>){
    return this.httpCliente.put<CoursesTi>(`${this.API}/update-course/${courseTi.idCourse}`, courseTi).pipe(first());
  }

  remove (idCourse: number){
    return this.httpCliente.delete(`${this.API}/delete/${idCourse}`).pipe(first());
  }
}
