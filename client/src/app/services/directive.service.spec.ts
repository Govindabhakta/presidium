import { TestBed, inject } from '@angular/core/testing';

import { DirectiveService } from './directive.service';

describe('DirectiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectiveService]
    });
  });

  it('should be created', inject([DirectiveService], (service: DirectiveService) => {
    expect(service).toBeTruthy();
  }));
});
