import {Component} from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgStyle, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-acceuil',
  imports: [
    UpperCasePipe,
    DatePipe,
    NgClass,
    NgStyle,
    NgForOf
  ],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css'
})
export class Acceuil {

  nom = 'formation angular';
  today = new Date();

  cours = [
    'Introduction Angular',
    'Data Binding',
    'Pipes et Directives',
    'Formulaires',
    'Routing avancé'
  ];
}
