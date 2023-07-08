import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ModalityPipe } from './pipes/modality.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ModalityPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    ModalityPipe
  ]
})
export class SharedModule { }
