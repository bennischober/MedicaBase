import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  ID: number;
  type: number;
  name: string;
  chname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, name: 'Hydrogenadsfadsf asd fasd fsdfasdfasdfasd fas dfasd fasd f ', type: 1.0079, chname: 'fsadfsdf asd fasd fasdfasdfH'},
  {ID: 2, name: 'Helium', type: 4.0026, chname: 'He'},
  {ID: 3, name: 'Lithium', type: 6.941, chname: 'Li'},
  {ID: 4, name: 'Beryllium', type: 9.0122, chname: 'Be'},
  {ID: 5, name: 'Boron', type: 10.811, chname: 'B'},
  {ID: 6, name: 'Carbon', type: 12.0107, chname: 'C'},
  {ID: 7, name: 'Nitrogen', type: 14.0067, chname: 'N'},
  {ID: 8, name: 'Oxygen', type: 15.9994, chname: 'O'},
  {ID: 9, name: 'Fluorine', type: 18.9984, chname: 'F'},
  {ID: 10, name: 'Neon', type: 20.1797, chname: 'Ne'},
];

@Component({
  selector: 'app-receipt-data',
  templateUrl: './receipt-data.component.html',
  styleUrls: ['./receipt-data.component.css']
})
export class ReceiptDataComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'type', 'name', 'chname'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
