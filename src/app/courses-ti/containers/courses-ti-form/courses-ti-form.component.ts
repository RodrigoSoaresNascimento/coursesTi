import { SubjectComputing } from './../../model/subject-computing';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
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

  form!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesTiService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {

      const course: CoursesTi = this.route.snapshot.data['courseTi'];
      this.form = this.formBuilder.group({
        idCourse: [course.idCourse],
        courseName: [course.courseName, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
        institution: [course.institution, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        modality: [course.modality, Validators.required],
        period: [course.period,  Validators.required],
        city: [course.period,  Validators.required],
        subjectsComputing: this.formBuilder.array(this.getSubjectsComputing(course))
      });
  }

  private getSubjectsComputing(course: CoursesTi){
    const subjectsComputing = [];
    if(course?.componentComputingDTOSet){
      course.componentComputingDTOSet.forEach( subjectComputing => subjectsComputing.push(this.createSubjectComputing(subjectComputing)));
    }else{
      subjectsComputing.push(this.createSubjectComputing());
    }
    return subjectsComputing;
  }

  private createSubjectComputing(SubjectComputing: SubjectComputing = {idCourse: 0, courseName: '', classHours: 0, syllabus: ''}){
    return this.formBuilder.group({
      idCourse: [SubjectComputing.idCourse],
      courseName: [SubjectComputing.courseName],
      classHours: [SubjectComputing.classHours],
      syllabus: [SubjectComputing.syllabus]
    })
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

  getErrorMessage(fieldName: string){
    const field = this.form.get(fieldName);

    if(field?.hasError('required')){
      return 'Este campo não pode ser vazio';
    }

    if(field?.hasError('minlength')){
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `O tamanho mínimo precisa ser de ${requiredLength}`;
    }

    if(field?.hasError('maxlength')){
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 250;
      return `O tamanho maximo é de ${requiredLength}`;
    }

    return 'Campo invalido!';

  }

}
