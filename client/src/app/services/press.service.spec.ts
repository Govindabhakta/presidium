import { TestBed, inject } from '@angular/core/testing';

import { PressService } from './press.service';

describe('PressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PressService]
    });
  });

  it('should be created', inject([PressService], (service: PressService) => {
    expect(service).toBeTruthy();
  }));
});
