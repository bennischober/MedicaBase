import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

export interface RecipeHistoryItem {
  id: number;
  date: Date;
  name: string;
  days: number;
}

@Component({
  selector: 'app-receipt-history',
  templateUrl: './receipt-history.component.html',
  styleUrls: ['./receipt-history.component.css']
})
export class ReceiptHistoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<RecipeHistoryItem>;
  dataSource: MatTableDataSource<RecipeHistoryItem>;

  displayedColumns = ['id', 'date', 'name', 'days'];

  constructor() {
    const recipe: RecipeHistoryItem[] = [
      { id: 1, date: new Date('12.11.2019'), name: 'Starker Freund des Atems', days: 9},
      { id: 2, date: new Date('01.05.2020'), name: 'Rezept 1', days: 5},
    ];
    this.dataSource = new MatTableDataSource(recipe);
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
