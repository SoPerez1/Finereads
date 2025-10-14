import { TestBed } from '@angular/core/testing';

import { InyRecomendation } from './iny-recomendation';

describe('InyRecomendation', () => {
  let service: InyRecomendation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyRecomendation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
