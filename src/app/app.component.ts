import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  letters = false;
  numbers = false;
  symbols = false;
  length = 0;

  onChangeUseLetters() {
    this.letters = !this.letters;
  }
  onChangeUseNumbers() {
    this.numbers = !this.numbers;
  }
  onChangeUseSymbols() {
    this.symbols = !this.symbols;
  }
  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
 
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onButtonClick() {
    const possNumbers = '1234567890';
    const possLetters = 'abcdefghiklmnopqrstuvwyxz'
    const possSymbols = '!@#$%^&*()';

    let validChars = '';
    if(this.letters) {
      validChars += possLetters;
    }
    if(this.numbers) {
      validChars += possNumbers;
    }
    if(this.symbols) {
      validChars += possSymbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
