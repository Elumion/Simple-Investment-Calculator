import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentLogic } from '../investment-logic/investment-logic.service';

@Component({
  selector: 'app-form-calculate',
  imports: [FormsModule],
  templateUrl: './form-calculate.html',
  styleUrl: './form-calculate.scss',
})
export class FormCalculate {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 10;

  constructor(private investmentLogic: InvestmentLogic) {}

  onSubmit() {
    console.log('Form submitted with values:', {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });

    this.investmentLogic.calculateInvestments(
      +this.initialInvestment,
      +this.annualInvestment,
      +this.expectedReturn,
      +this.duration,
    );
  }
}
