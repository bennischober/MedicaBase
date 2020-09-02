import { Component, AfterViewInit, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
// import { RecipeDataDataSource, RecipeDataItem } from './recipe-data-datasource';
import { CreateRecipeDataDialogComponent } from '../create-recipe-data-dialog/create-recipe-data-dialog.component';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { DataServiceService } from '../data-service.service';
import { ReceiptDataDeleteDialogComponent } from '../receipt-data-delete-dialog/receipt-data-delete-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipeDataInfoDialogComponent } from '../recipe-data-info-dialog/recipe-data-info-dialog.component';

// -> recipe-data-datasource.ts braucht man nicht mehr

export interface DialogData {
  name: string;
}

export interface RecipeDataItem {
  name: string;
  type: number;
  id: number;
  latname: string;
  cnname: string;
  engname: string;
}

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css']
})
export class RecipeDataComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<RecipeDataItem>;
  dataSource: MatTableDataSource<RecipeDataItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'type', 'name', 'latname', 'cnname', 'engname', 'info', 'edit', 'delete'];

  // addROW -> sollte später mit der ID aus der DB ersetzt werden
  setID = 5;

  // get RowID -> getRowID (->&& changeMessage)
  getId: number;
  recipeMessage: number;

  // get Snackbar infos
  getDrugName = 'Neues Arzneimittel';
  getDeleteName: string;
  getEditName: string;

  // hover Text
  hoverText: string;

  constructor(
    public dialog: MatDialog,
    private msgdata: DataServiceService,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar) {
    const recipe: RecipeDataItem[] = [
      {id: 1, type: 4, name: 'Rhiz. schwertliliengew.', latname: 'Belamcandae sinensis', cnname: 'SHE GAN', engname: 'Iris domestica'},
      {id: 2, type: 3, name: 'Stachelpanax', latname: 'ACANTHOPANACIS radicis', cnname: 'WU JIA PI', engname: 'CORTEX - efeuart'},
      {id: 3, type: 1, name: 'Aloesaft', latname: 'Aloes Herba', cnname: 'LU HUI', engname: 'Wxtractus Foliorum Herba'},
      {id: 4, type: 2, name: 'Färberwald Wurzel', latname: 'Isatidis', cnname: 'BAN LAN GEN', engname: 'Radix'},
      {id: 5, type: 3, name: 'Ingwergewächs', latname: 'Amomi Villosi Fructus', cnname: 'SHA REN', engname: 'Zingiberaceae'},
    ];
    this.dataSource = new MatTableDataSource(recipe);
  }

  ngOnInit() {
   // this.dataSource = new RecipeDataDataSource();
   this.msgdata.currentRecipeEditMessage.subscribe(recipeMessage => this.recipeMessage = recipeMessage);
  }

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

  // Brauche ich eine openEditDialog Methode?
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateRecipeDataDialogComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._snackBar.open('Das Arzneimittel ' + '\'' + this.getDrugName + '\'' + ' wurde gespeichert!', 'Ok', {
          duration: 2500,
        });
      }
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditRecipeComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._snackBar.open('Das Arzneimittel ' + '\'' + this.getEditName + '\'' + ' wurde gespeicht!', 'Ok', {
          duration: 2500,
        });
      }
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ReceiptDataDeleteDialogComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._snackBar.open('Das Arzneimittel ' + '\'' + this.getDeleteName + '\'' + ' wurde gelöscht!', 'Ok', {
          duration: 2500,
        });
      }
    });
  }

  openInfoDialog(): void {
    const dialogRef = this.dialog.open(RecipeDataInfoDialogComponent, {
      width: '550px',
    });
  }

  // getRowID && changeMessage
  getRowID(row) {
    this.getId = row.id;
    this.msgdata.changeRecipeMessage(this.getId);
    console.log(this.getId);

    this.getDeleteName = row.name;
    this.getEditName = row.name;
  }

  getTooltipData(rowData: number) {
    if (rowData === 1) {
      this.hoverText = 'Rohdroge';
    } else if (rowData === 2) {
      this.hoverText = 'Tropfen';
    } else if (rowData === 3) {
      this.hoverText = 'Granulate';
    } else if (rowData === 4) {
      this.hoverText = 'Tabletten';
    }
    return this.hoverText;
  }
}
