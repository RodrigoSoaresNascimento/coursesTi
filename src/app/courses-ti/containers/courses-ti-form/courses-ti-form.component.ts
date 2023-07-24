import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesTiService } from '../../services/courses-ti.service';
import { CoursesTi } from '../../model/courses-ti';

@Component({
  selector: 'app-courses-ti-form',
  templateUrl: './courses-ti-form.component.html',
  styleUrls: ['./courses-ti-form.component.scss']
})
export class CoursesTiFormComponent {

  form = this.formBuilder.group({
    idCourse: [0],
    courseName: [''],
    institution: [''],
    modality: [''],
    period: [''],
    city: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesTiService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {

      const course: CoursesTi = this.route.snapshot.data['courseTi'];
      this.form.setValue({
        idCourse: course.idCourse,
        courseName: course.courseName,
        institution: course.institution,
        modality: course.modality,
        period: course.period,
        city: course.city
      });

  }

  onSubmit(){
    console.log('teste');
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.onSucess();
      },
      error: () => {
        this.onError();
   },
});
  }

  onCancel(){
    this.location.back();
  }

  private onError(){
    this.snackBar.open("Erro ao salvar curso", '', {duration : 5000});
  }

  private onSucess(){
    this.snackBar.open("Curso salvo com sucesso!", '', {duration : 5000});
    this.onCancel();
  }

}
