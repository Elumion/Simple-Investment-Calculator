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
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.investmentOutputs = annualData;
    return this.investmentOutputs;
  }
}
