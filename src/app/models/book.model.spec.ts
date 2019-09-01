import { TestBed } from '@angular/core/testing';

import { BookModel } from './book.model';

describe('BookModel', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookModel = TestBed.get(BookModel);
    expect(service).toBeTruthy();
  });
});
