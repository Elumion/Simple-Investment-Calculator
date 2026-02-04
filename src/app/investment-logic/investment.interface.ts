export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestmentOutput {
  investmentValue: number;
  interest: number;
  totalInterest: number;
  investedCapital: number;
}
