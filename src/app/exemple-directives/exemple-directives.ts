import { Component } from '@angular/core';

@Component({
  selector: 'app-exemple-directives',
  imports: [],
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
