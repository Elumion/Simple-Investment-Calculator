import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormCalculate } from './form-calculate/form-calculate';
import { InvestmentsList } from './investments-list/investments-list';
import { InvestmentLogic } from './investment-logic/investment-logic.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormCalculate, InvestmentsList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('simple-investment-calculator');

  constructor(private readonly investmentLogic: InvestmentLogic) {}

  get investmentOutputs() {
    return this.investmentLogic.investmentOutputs;
  }
}
