import { TestBed } from '@angular/core/testing';

import { Paymentcheck1Guard } from './paymentcheck1.guard';

describe('Paymentcheck1Guard', () => {
  let guard: Paymentcheck1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Paymentcheck1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
