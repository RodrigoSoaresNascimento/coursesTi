import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CoursesTi } from '../../model/courses-ti';

@Component({
  selector: 'app-courses-ti-list',
  templateUrl: './courses-ti-list.component.html',
  styleUrls: ['./courses-ti-list.component.scss']
})
export class CoursesTiListComponent {

  @Input() coursesTi: CoursesTi[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['name', 'institution', 'modality', 'city', 'actions'];

  constructor(
  ){}

  onAdd(){
    console.log("teste");
    this.add.emit(true);
  }

  onEdit(coursesTi: CoursesTi){
    this.edit.emit(coursesTi);
  }

}
