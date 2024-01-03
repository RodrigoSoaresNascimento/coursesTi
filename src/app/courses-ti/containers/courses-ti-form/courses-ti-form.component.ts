import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, UntypedFormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesTi } from '../../model/courses-ti';
import { CoursesTiService } from '../../services/courses-ti.service';
import { SubjectComputing } from './../../model/subject-computing';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';


@Component({
  selector: 'app-courses-ti-form',
  templateUrl: './courses-ti-form.component.html',
  styleUrls: ['./courses-ti-form.component.scss'],
})
export class CoursesTiFormComponent {


  form!: FormGroup;

  constructor(
    public formUtils: FormUtilsService,
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesTiService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    const course: CoursesTi = this.route.snapshot.data['courseTi'];
    this.form = this.formBuilder.group({
      idCourse: [course.idCourse],
      courseName: [
        course.courseName,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
      institution: [
        course.institution,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      modality: [course.modality, Validators.required],
      period: [course.period, Validators.required],
      city: [course.city, Validators.required],
      componentComputingDTOSet: this.formBuilder.array(this.getSubjectsComputing(course), Validators.required)
    });
  }

  private getSubjectsComputing(course: CoursesTi) {
    const componentComputingDTOSet = [];
    if (course?.componentComputingDTOSet) {
      course.componentComputingDTOSet.forEach((subjectComputing) =>
      componentComputingDTOSet.push(this.createSubjectComputing(subjectComputing))
      );
    } else {
      componentComputingDTOSet.push(this.createSubjectComputing());
    }
    return componentComputingDTOSet;
  }

  private createSubjectComputing(
    componentComputingDTOSet: SubjectComputing = {
      idCourse: 0,
      courseName: '',
      classHours: 0,
      syllabus: '',
    }
  ) {
    return this.formBuilder.group({
      idCourse: [componentComputingDTOSet.idCourse],
      courseName: [
        componentComputingDTOSet.courseName,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
      classHours: [
        componentComputingDTOSet.classHours,
        [Validators.required, Validators.minLength(1), Validators.maxLength(3)],
      ],
      syllabus: [
        componentComputingDTOSet.syllabus,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  getSubjectsComputingFormArray() {
    return (<UntypedFormArray>this.form.get('componentComputingDTOSet')).controls;
  }

  addNewSubjectsComputing() {

    const componentComputingDTOSet = this.form.get('componentComputingDTOSet') as UntypedFormArray;
    componentComputingDTOSet.push(this.createSubjectComputing());

  }

  removeSubjectsComputing(index: number) {
    const subjectsComputing = this.form.get(
      'componentComputingDTOSet'
    ) as UntypedFormArray;
    subjectsComputing.removeAt(index);
  }

  onSubmit() {
    const modality = this.form.get('modality')?.value;
    const period = this.form.get('period')?.value;

    if (this.form.valid) {
      console.log(this.form);
      this.service.save(this.form.value, period, modality).subscribe({
        next: () => {
          this.onSucess();
        },
        error: () => {
          this.onError();
        },
      });
    }else{
      this.formUtils.validateAllFormFields(this.form);
    }
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso', '', { duration: 5000 });
  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

}
