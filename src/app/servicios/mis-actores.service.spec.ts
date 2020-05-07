import { TestBed } from '@angular/core/testing';

import { MisActoresService } from './mis-actores.service';

describe('MisActoresService', () => {
  let service: MisActoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisActoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
