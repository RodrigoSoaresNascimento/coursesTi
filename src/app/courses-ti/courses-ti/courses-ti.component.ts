import { Component } from '@angular/core';
import { CoursesTi } from 'src/app/courses-ti/model/courses-ti';
import { CoursesTiService } from '../services/courses-ti.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses-ti',
  templateUrl: './courses-ti.component.html',
  styleUrls: ['./courses-ti.component.scss'],
})
export class CoursesTiComponent {
  coursesTi$: Observable<CoursesTi[]>;

  displayedColumns = ['name', 'institution', 'modality', 'city'];

  constructor(
    private coursesTiService: CoursesTiService,
    public dialog: MatDialog
  ) {
    this.coursesTi$ = coursesTiService.findAll().pipe(
      catchError((error) => {
        this.onError('Erro ao Carregar cursos')
        return of([]);
      })
    );
  }

  onError(errorMesage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMesage
    });
  }
}
