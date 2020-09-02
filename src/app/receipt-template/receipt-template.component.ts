import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, MatTable, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReceiptTemplateEditDialogComponent } from '../receipt-template-edit-dialog/receipt-template-edit-dialog.component';
import { ReceiptTemplateDeleteDialogComponent } from '../receipt-template-delete-dialog/receipt-template-delete-dialog.component';
import { ReceiptTemplateCreateDialogComponent } from '../receipt-template-create-dialog/receipt-template-create-dialog.component';

export interface RecipeTemplateItem {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-receipt-template',
  templateUrl: './receipt-template.component.html',
  styleUrls: ['./receipt-template.component.css']
})
export class ReceiptTemplateComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<RecipeTemplateItem>;
  dataSource: MatTableDataSource<RecipeTemplateItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'edit', 'delete'];

  /************************************* VARIABLEN *************************************/

  // getRowID
  getID: number;
  getDeleteName: string;
  getEditName: string;

  /**********************************  VARIABLEN ENDE **********************************/

  constructor(
    public dialog: MatDialog,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar) {
    const recipe: RecipeTemplateItem[] = [
      { id: 1, name: 'Rezept 1', description: 'Inhaltsstoffe' },
      { id: 2, name: 'Starker Freund des Atems', description: 'Akute Hals-Rachen-Kehlkopfentzündung' },
    ];
    this.dataSource = new MatTableDataSource(recipe);
  }

  ngOnInit() { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //  this.table.dataSource = this.dataSource;
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  openEditDialog(): void {
    const dialogRef = this.dialog.open(ReceiptTemplateEditDialogComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._snackBar.open('Das Rezept ' + '\'' + this.getEditName + '\''  + ' wurde gespeichert!', 'Ok', {
          duration: 2500,
        });
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ReceiptTemplateCreateDialogComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._snackBar.open('Das Rezept wurde gespeichert!', 'Ok', {
          duration: 2500,
        });
      }
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ReceiptTemplateDeleteDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._snackBar.open('Das Rezept ' + '\''  + this.getDeleteName + '\''  + ' wurde gelöscht!', 'Ok', {
          duration: 2500,
        });
      }
    });
  }

  getRowID(row) {
    this.getID = row.id;

    this.getDeleteName = row.name;
    this.getEditName = row.name;
  }

}
