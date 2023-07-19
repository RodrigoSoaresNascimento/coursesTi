import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesTiService } from '../services/courses-ti.service';

@Component({
  selector: 'app-courses-ti-form',
  templateUrl: './courses-ti-form.component.html',
  styleUrls: ['./courses-ti-form.component.scss']
})
export class CoursesTiFormComponent {

  form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesTiService,
    private snackBar: MatSnackBar,
    private location: Location
    ) {
      this.form = this.formBuilder.group({
        courseName: [null],
        institution: [null],
        modality: [null],
        period: [null],
        city: [null]
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
