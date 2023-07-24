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
    console.log('save');
    return this.httpCliente.post<CoursesTi>(`${this.API}/add`, course)
    .pipe(first());
  }

  findById(_idCourse: number){
    console.log(_idCourse);
    return this.httpCliente.get<CoursesTi>(`${this.API}/find-by-id/${_idCourse}`)
  }
}
