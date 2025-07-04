import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UsersService} from '../services/users-service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.html',
  imports: [
    FormsModule,
  ],
  styleUrl: './data-binding.css'
})
export class DataBinding implements OnInit{
  title = 'Exemple de Data Binding en Angular';
  inputValue = 'Texte initial';
  message = '';
  username = '';
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled: boolean = true;
  count: number = 0;
  constructor(private readonly userService: UsersService) {}

  ngOnInit(): void {

  }
  increment() {
    this.count++;
  }
  onButtonClick() {
    this.message = 'Bouton cliqué à ' + new Date().toLocaleTimeString();
  }



}
