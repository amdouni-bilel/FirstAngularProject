import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    NgForOf
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  products = [
    { name: 'Ordinateur', price: 1200, promo: true },
    { name: 'Téléphone', price: 800, promo: false },
    { name: 'Clavier', price: 100, promo: true }
  ];

}
