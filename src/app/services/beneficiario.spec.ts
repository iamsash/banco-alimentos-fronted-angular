import { TestBed } from '@angular/core/testing';

import { Beneficiario } from './beneficiario';

describe('Beneficiario', () => {
  let service: Beneficiario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Beneficiario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
