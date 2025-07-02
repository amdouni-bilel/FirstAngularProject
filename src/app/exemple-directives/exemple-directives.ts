import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {HighlightDirective} from './highlight';

@Component({
  selector: 'app-exemple-directives',
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    NgStyle,
    HighlightDirective,
  ],
  templateUrl: './exemple-directives.html',
  styleUrl: './exemple-directives.css'
})
export class ExempleDirectives {
  products = [
    { name: 'Ordinateur', price: 1200, promo: true },
    { name: 'Téléphone', price: 800, promo: false },
    { name: 'Clavier', price: 100, promo: true }
  ];

}
