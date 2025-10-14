import { TestBed } from '@angular/core/testing';

import { Inyeccion8 } from './inyeccion8';

describe('Inyeccion8', () => {
  let service: Inyeccion8;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inyeccion8);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
