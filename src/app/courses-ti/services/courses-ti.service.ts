import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CoursesTi } from '../model/courses-ti';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesTiService {

  private readonly API = '/cursos/findAll';

  constructor(private httpCliente: HttpClient) { }

  findAll() {
    return this.httpCliente.get<CoursesTi[]>(this.API)
    .pipe(
      first(),
      delay(5000)
    );
  }
}
