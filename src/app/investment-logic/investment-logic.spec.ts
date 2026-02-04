import { TestBed } from '@angular/core/testing';

import { InvestmentLogic } from './investment-logic.service';

describe('InvestmentLogic', () => {
  let service: InvestmentLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
