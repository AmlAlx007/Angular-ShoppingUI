import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[urlvalidator]',
    providers: [
      { provide: NG_VALIDATORS, useValue: new UrlValidator, multi: true }
    ]
  })
export class UrlValidator implements Validator{
    
    validate(event:AbstractControl):ValidationErrors | null
    {
        if(!event.value.match('http://[a-zA-Z]+')){
            return {urlInvalid:true}
        }
        return null
    }
}