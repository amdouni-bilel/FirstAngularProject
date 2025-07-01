import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-template-driven',
  imports: [
    FormsModule , CommonModule
  ],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css'
})
export class TemplateDriven {
  // Exemple de formulaire template-driven
  user = {
    name: '',
    email: ''
  }

  submitForm() {
    console.log('Formulaire soumis :', this.user);
  }

















  // user = {
  //   name: '',
  //   email: ''
  // };
  //
  // submitForm() {
  //   console.log('Formulaire soumis :', this.user);
  // }
}
