import { Component } from '@angular/core';
import { InvestmentLogic } from '../investment-logic/investment-logic.service';
import { InvestmentOutput } from '../investment-logic/investment.interface';
import { CommonModule } from '@angular/common';
import { ToFixedPipe } from '../pipes/to-fixed-pipe';

@Component({
  selector: 'app-investments-list',
  imports: [CommonModule, ToFixedPipe],
  templateUrl: './investments-list.html',
  styleUrl: './investments-list.scss',
})
export class InvestmentsList {
  constructor(private investmentLogic: InvestmentLogic) {}

  get investmentOutputs(): InvestmentOutput[] {
    return this.investmentLogic.investmentOutputs;
  }
}
