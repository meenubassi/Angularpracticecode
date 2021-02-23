import { TestBed } from '@angular/core/testing';

import { PaymentcheckGuard } from './paymentcheck.guard';

describe('PaymentcheckGuard', () => {
  let guard: PaymentcheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentcheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
