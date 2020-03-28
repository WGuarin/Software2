import { TestBed } from '@angular/core/testing';

import { ServDatFisService } from './serv-dat-fis.service';

describe('ServDatFisService', () => {
  let service: ServDatFisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServDatFisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
