import { TestBed } from '@angular/core/testing';

import { GenerateCartIdService } from './generate-cart-id.service';

describe('GenerateCartIdService', () => {
  let service: GenerateCartIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateCartIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
