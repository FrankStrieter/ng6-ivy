import { TestBed, inject } from '@angular/core/testing';

import { DemoCrudService } from './demo-crud.service';

describe('DemoCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoCrudService]
    });
  });

  it('should be created', inject([DemoCrudService], (service: DemoCrudService) => {
    expect(service).toBeTruthy();
  }));
});
