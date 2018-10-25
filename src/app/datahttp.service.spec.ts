import { TestBed, inject } from '@angular/core/testing';

import { DatahttpService } from './datahttp.service';

describe('DatahttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatahttpService]
    });
  });

  it('should be created', inject([DatahttpService], (service: DatahttpService) => {
    expect(service).toBeTruthy();
  }));
});
