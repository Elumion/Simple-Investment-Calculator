import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalculate } from './form-calculate';

describe('FormCalculate', () => {
  let component: FormCalculate;
  let fixture: ComponentFixture<FormCalculate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalculate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCalculate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
