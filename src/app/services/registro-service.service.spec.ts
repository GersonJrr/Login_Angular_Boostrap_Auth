import { TestBed } from '@angular/core/testing';

import { RegistroService} from './registro-service.service';

describe('RegistroServiceService', () => {
  let service: RegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
