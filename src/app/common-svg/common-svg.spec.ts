import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSvg } from './common-svg';

describe('CommonSvg', () => {
  let component: CommonSvg;
  let fixture: ComponentFixture<CommonSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
