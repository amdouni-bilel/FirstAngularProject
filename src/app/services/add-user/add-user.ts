import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
  userForm : FormGroup ;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name : ['' , Validators.required],
      email : ['' , Validators.required , Validators.email],
      age : ['' , Validators.required , Validators.min(18)],
    })
  }
  submitForm(){
    if(this.userForm.valid){
      console.log('Formulaire soumis :', this.userForm.value);
      alert("Formulaire valide avec un message");
    }

  }

}
