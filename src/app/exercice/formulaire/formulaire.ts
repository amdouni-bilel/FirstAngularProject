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
    this.form =  //est une propriété de la classe de type FormGroup.
      this.fb.group({  //crée un nouveau groupe de champs de formulaire (équivalent à new FormGroup() mais plus simple et lisible).
      nom: ['', Validators.required], //Champ de type texte. Valeur initiale : chaîne vide ''.
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
