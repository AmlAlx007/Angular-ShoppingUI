import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent  {


  form = new FormGroup({
    name: new FormControl('',Validators.required),
    address1: new FormControl('',Validators.required),
    address2: new FormControl('',Validators.required),
    city: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]*")])
  });

  constructor() { }

  
  get name(){
    return this.form.get('name');
  }
  get city(){
    return this.form.get('city');
  }
  get address1(){
    return this.form.get('address1');
  }
}
