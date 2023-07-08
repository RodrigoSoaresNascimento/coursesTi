import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modality'
})
export class ModalityPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'PRESENCIAL': return 'computer'
      case 'EAD': return 'headphones'
    }
    return '';
  }

}
