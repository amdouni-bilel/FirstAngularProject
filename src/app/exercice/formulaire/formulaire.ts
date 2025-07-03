import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-formulaire',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css'
})
export class Formulaire {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Formulaire soumis :', this.form.value);
      alert("Formulaire valide avec un message")
    }
  }
}
