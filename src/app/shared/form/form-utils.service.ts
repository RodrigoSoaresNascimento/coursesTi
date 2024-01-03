import { Injectable } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  validateAllFormFields (FormGroup: UntypedFormGroup | UntypedFormArray){
    Object.keys(FormGroup.controls).forEach( field => {
      const control = FormGroup.get(field);

      if(control instanceof UntypedFormControl){
        control.markAsTouched({onlySelf: true});
      }else if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray){
        control.markAsTouched({onlySelf: true});
        this.validateAllFormFields(control);
      }

    })
  }

  getErrorMessage(FormGroup: UntypedFormGroup , fieldName: string) {
    const field = FormGroup.get(fieldName) as UntypedFormControl;

    return this.getErrorMessageFromField(field);

  }

  getErrorMessageFromField (field: UntypedFormControl ) {


    if (field?.hasError('required')) {
      return 'Este campo não pode ser vazio';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors
        ? field.errors['minlength']['requiredLength']
        : 5;
      return `O tamanho mínimo precisa ser de ${requiredLength}`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors
        ? field.errors['maxlength']['requiredLength']
        : 250;
      return `O tamanho maximo é de ${requiredLength}`;
    }

    return 'Campo invalido';
  }

  getFormArrayFieldErrorMenssage (FormGroup: UntypedFormGroup, formArrayName: string, fieldName: string, index: number){
    const formArray = FormGroup.get(formArrayName) as UntypedFormArray;
    const field = formArray.controls[index].get(fieldName) as UntypedFormControl;
    return this.getErrorMessageFromField(field);

  }

  isFormArrayValid(FormGroup: UntypedFormGroup, formArrayName : string) {
    const formArray = FormGroup.get(formArrayName) as UntypedFormArray;
    return (
      !formArray.valid &&
      formArray.hasError('required') &&
      formArray.touched
    );
  }


}
