import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { CoursesTi } from 'src/app/courses-ti/model/courses-ti';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CoursesTiService } from '../../services/courses-ti.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-courses-ti',
  templateUrl: './courses-ti.component.html',
  styleUrls: ['./courses-ti.component.scss'],
})
export class CoursesTiComponent {
  coursesTi$: Observable<CoursesTi[]> | null = null;

  constructor(
    private coursesTiService: CoursesTiService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.coursesTi$ = this.coursesTiService.findAll().pipe(
      catchError((error) => {
        this.onError('Erro ao Carregar cursos');
        return of([]);
      })
    );
  }

  onError(errorMesage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMesage,
    });
  }

  onAdd() {
    console.log('teste');
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(courseTi: CoursesTi) {
    console.log(courseTi);
    this.router.navigate(['edit', courseTi.idCourse], {
      relativeTo: this.route,
    });
  }

  onDelete(courseTi: CoursesTi) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Você quer deletar esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.coursesTiService.remove(courseTi.idCourse).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Curso removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          () => this.onError('falha ao remover curso')
        );
      }
    });
  }
}
