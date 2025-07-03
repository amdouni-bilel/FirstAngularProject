import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-exemple-pipe',
  imports: [
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,

  ],
  templateUrl: './exemple-pipe.html',
  styleUrl: './exemple-pipe.css'
})
export class ExemplePipe {
  name = 'angular';
  today = new Date();
  price = 1234.56;
}
