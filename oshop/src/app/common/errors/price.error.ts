import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { ValidationErrors } from '@angular/forms'
import { Directive } from '@angular/core';

@Directive({
    selector: '[custompricevalidator]',
    providers: [
      { provide: NG_VALIDATORS, useValue: new PriceValidator, multi: true }
    ]
  })
export class PriceValidator implements Validator{

    validate(event:AbstractControl):ValidationErrors | null
    {
        if(event.value<0){
            return {priceInvalid:true}
        }
        return null;
    }
}