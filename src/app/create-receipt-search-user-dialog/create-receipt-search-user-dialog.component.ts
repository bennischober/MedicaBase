import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-create-receipt-search-user-dialog',
  templateUrl: './create-receipt-search-user-dialog.component.html',
  styleUrls: ['./create-receipt-search-user-dialog.component.css']
})
export class CreateReceiptSearchUserDialogComponent implements OnInit {
  displayedColumns = ['id', 'name', 'surname', 'city'];
  dataSource: MatTableDataSource<UserData>;

  selectedRowIndex: number;
  userMessage: number;
  getId: number;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    public dialogRef: MatDialogRef<CreateReceiptSearchUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private msgdata: DataServiceService) {
      const users: UserData[] = [
        {id: '1', name: 'Joachim', surname: 'Schmidt', city: 'Kernten'},
        {id: '2', name: 'Maja', surname: 'Müller', city: 'Regensburg'},
        {id: '3', name: 'Max', surname: 'Geiger', city: 'Fürstenfeldbruck'}
      ];
      this.dataSource = new MatTableDataSource(users);
    }

  ngOnInit() {
    this.msgdata.currentUserMessage.subscribe(userMessage => this.userMessage = userMessage);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

// Dialog close
  onNoClick(): void {
    this.dialogRef.close();
  }

// Markiert die Zeile
  doSomething(row: { id: number; }) {
    this.getId = row.id;
    this.selectedRowIndex = row.id;
    console.log(this.selectedRowIndex);
  }

// changeMessage dann auf den Buttonclick setzen
  changeMessages() {
    this.msgdata.changeUserMessage(this.getId);
    console.log(this.userMessage);
  }

// changeMessages wird zu onClick()
  onClick() {
    this.msgdata.changeUserMessage(this.getId);
    console.log(this.userMessage);
  }
}

export interface UserData {
  id: string;
  name: string;
  surname: string;
  city: string;
}
