import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormCalculate } from './form-calculate/form-calculate';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormCalculate],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('simple-investment-calculator');
}
