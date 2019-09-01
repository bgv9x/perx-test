import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookModel } from '../models/book.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: BookModel[];
  dataSource: MatTableDataSource<BookModel>;

  displayedColumns = ['id', 'type', 'attributes.content',
    'attributes.display_properties.type',
    'attributes.created_at',
    'attributes.updated_at'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books = this.bookService.all();
    this.dataSource = new MatTableDataSource(this.books);
    this.dataSource.sortingDataAccessor = this.__sortingDataAccessor;
    this.dataSource.filterPredicate = this.__filterPredicate;
    this.dataSource.sort = this.sort;

    console.log(this.books);
  }

  private __sortingDataAccessor(item: any, property: any) {
    if (property.includes('.')) {
      return property.split('.')
        .reduce((object: any, key: any) => object[key], item);
    }
    return item[property];
  }

  private __filterPredicate(book: BookModel, filter: string) {
    const transformed = filter.trim().toLowerCase();

    const listAsFlatString = (obj: any): string => {
      let returnVal = '';

      Object.values(obj).forEach((val) => {
        if (typeof val !== 'object') {
          returnVal = returnVal + ' ' + val;
        } else if (val !== null) {
          returnVal = returnVal + ' ' + listAsFlatString(val);
        }
      });

      return returnVal.trim().toLowerCase();
    };

    return listAsFlatString(book).includes(transformed);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
