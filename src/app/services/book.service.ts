import { Injectable } from '@angular/core';
import * as BooksData from '../../assets/perx-data.json';
import { BookModel } from '../models/book.model.js';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {
  }

  all(): BookModel[] {
    const rawData: any = BooksData;
    const result: BookModel[] = [];
    rawData.default.data.forEach( book => {
      const model = new BookModel();
      result.push(model.deserialize(book));
    });
    return result;
  }
}
