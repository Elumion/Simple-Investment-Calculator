export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestmentOutput {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  totalAmountInvested: number;
  annualInvestment: number;
}
