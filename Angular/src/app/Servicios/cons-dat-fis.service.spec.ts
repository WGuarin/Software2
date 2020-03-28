import { TestBed } from '@angular/core/testing';

import { ConsDatFisService } from './cons-dat-fis.service';

describe('ConsDatFisService', () => {
  let service: ConsDatFisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsDatFisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
