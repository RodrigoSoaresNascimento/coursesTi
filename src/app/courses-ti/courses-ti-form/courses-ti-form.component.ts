import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses-ti-form',
  templateUrl: './courses-ti-form.component.html',
  styleUrls: ['./courses-ti-form.component.scss']
})
export class CoursesTiFormComponent {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        courseName: [null],
        institution: [null],
        modality: [null]
      });
  }

}
