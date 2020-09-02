import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import { CostumerDataDataSource, CostumerDataItem } from './costumer-data-datasource';
import { DataServiceService } from '../data-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CostumerDataDialogComponent } from '../costumer-data-dialog/costumer-data-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material';

export interface CostumerDataItem {
  name: string;
  id: number;
  surname: string;
  city: string;
}

@Component({
  selector: 'app-costumer-data',
  templateUrl: './costumer-data.component.html',
  styleUrls: ['./costumer-data.component.css']
})
export class CostumerDataComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<CostumerDataItem>;
  dataSource: MatTableDataSource<CostumerDataItem>;


  message: string;
  // recipeMessage: string;
  userRecipeMessage: number;
  deleteUserMessage: number;

  getId: number;
  getDeleteId: number;
  getName: string;
  getSurname: string;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // FAMILY ERST SPÄTER!
  displayedColumns = ['id', 'name', 'surname', 'city', 'create', 'history', 'add', 'delete'];

  constructor(private data: DataServiceService,
              public dialog: MatDialog,
    // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar) {
    const costumer: CostumerDataItem[] = [
      { id: 1, name: 'Joachim', surname: 'Schmidt', city: 'Kernten' },
      { id: 2, name: 'Maja', surname: 'Müller', city: 'Regensburg' },
      { id: 3, name: 'Max', surname: 'Geiger', city: 'Fürstenfeldbruck' },
      { id: 4, name: 'Crescentia', surname: 'Jöllenbeck', city: 'Hannover' },
      { id: 5, name: 'Marcellus', surname: 'Tangeman', city: 'Hildesheim' },
      { id: 6, name: 'Wiebke', surname: 'Wirner', city: 'Moers' },
      { id: 7, name: 'Hermann', surname: 'Schnell', city: 'Paderborn' },
      { id: 8, name: 'Elisa', surname: 'Behringer', city: 'Reutlingen' },
      { id: 9, name: 'Alwin', surname: 'Hildebrand', city: 'Saarbrücken' },
      { id: 10, name: 'Steffi', surname: 'Friedemann', city: 'Siegen' },
    ];
    this.dataSource = new MatTableDataSource(costumer);
  }

  ngOnInit() {
    // this.dataSource = new CostumerDataDataSource();
   // this.data.currentMessage.subscribe(recipeMessage => this.recipeMessage = recipeMessage);
    this.data.currentUserRecipeMessage.subscribe(userRecipeMessage => this.userRecipeMessage = userRecipeMessage);
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentDeleteUserMessage.subscribe(deleteUserMessage => this.deleteUserMessage = deleteUserMessage);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deleteUser() {
    console.log('Hier kommt die löschen Funktion');
  }

  createRecipe(row: { id: number; }) {
    this.getId = row.id;
    this.data.changeUserRecipeMessage(this.getId);
    console.log(this.userRecipeMessage);
  }

  searchUser() {
    console.warn('LOOOL :O');
  }

  newMessage(input: string) {
    this.data.changeMessage(input);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CostumerDataDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._snackBar.open('Der Benutzer ' + this.getName + ' ' + this.getSurname + ' wurde gelöscht!', 'Ok', {
          duration: 2500,
        });
      }
    });
  }

  getUser(row) {
    this.getName = row.name;
    this.getSurname = row.surname;

    this.getDeleteId = row.id;
    this.data.changeDeleteUserMessage(this.getDeleteId);
    console.log(this.getDeleteId);
    // return 'Der Benutzer ' + row.name + ' ' + row.surname + ' wurde gelöscht';
  }
}
