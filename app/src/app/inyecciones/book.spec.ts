import { TestBed } from '@angular/core/testing';

import { Books } from './book.service';

describe('Books', () => {
  let service: Books;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Books);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
