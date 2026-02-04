import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsList } from './investments-list';

describe('InvestmentsList', () => {
  let component: InvestmentsList;
  let fixture: ComponentFixture<InvestmentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
