import { TestBed } from '@angular/core/testing';

import { Distribucion } from './distribucion';

describe('Distribucion', () => {
  let service: Distribucion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Distribucion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
