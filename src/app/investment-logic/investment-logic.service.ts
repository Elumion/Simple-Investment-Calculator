import { Injectable } from '@angular/core';
import { InvestmentOutput } from './investment.interface';

@Injectable({
  providedIn: 'root',
})
export class InvestmentLogic {
  investmentOutputs: InvestmentOutput[] = [];

  calculateInvestments(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number,
  ): InvestmentOutput[] {
    if (this.investmentOutputs.length > 0) {
      this.investmentOutputs = [];
    }
    for (let i = 1; i <= duration; i++) {
      this.investmentOutputs.push({
        investmentValue: initialInvestment,
        interest: annualInvestment,
        totalInterest: expectedReturn,
        investedCapital: duration,
      });
    }
    return this.investmentOutputs;
  }
}
