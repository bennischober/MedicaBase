import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

export interface RecipeTemplateData {
  id: number;
  name: string;
  description: string;
}

export interface RecipeData {
  position: number;
  type: number;
  name: string;
  latname: string;
  cnname: string;
  engname: string;
}

const recipe: RecipeData[] = [
  { position: 1, type: 4, name: 'Rhiz. schwertliliengew.', latname: 'Belamcandae sinensis', cnname: 'SHE GAN', engname: 'Iris domestica' },
  { position: 2, type: 3, name: 'Stachelpanax', latname: 'ACANTHOPANACIS radicis', cnname: 'WU JIA PI', engname: 'CORTEX - efeuart' },
  { position: 3, type: 1, name: 'Aloesaft', latname: 'Aloes Herba', cnname: 'LU HUI', engname: 'Wxtractus Foliorum Herba' },
  { position: 4, type: 2, name: 'Färberwald Wurzel', latname: 'Isatidis', cnname: 'BAN LAN GEN', engname: 'Radix' },
  { position: 5, type: 3, name: 'Ingwergewächs', latname: 'Amomi Villosi Fructus', cnname: 'SHA REN', engname: 'Zingiberaceae' },
];

@Component({
  selector: 'app-create-receipt-dialog',
  templateUrl: './create-receipt-dialog.component.html',
  styleUrls: ['./create-receipt-dialog.component.css']
})
export class CreateReceiptDialogComponent {
  displayedColumns = ['select', 'position', 'type', 'name', 'latname', 'cnname', 'engname'];
  dataSource = new MatTableDataSource<RecipeData>(recipe);
  selection = new SelectionModel<RecipeData>(true, []);

  displayedColumns2 = ['id', 'name', 'description'];
  dataSource2: MatTableDataSource<RecipeTemplateData>;

  // get RowID -> getRowID (->&& changeMessage)
  getId: number;
  selectedRowIndex: number;

  // hover Text
  hoverText: string;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public dialogRef: MatDialogRef<CreateReceiptDialogComponent>) {
    const recipeTemplate: RecipeTemplateData[] = [
      { id: 1, name: 'Rezept 1', description: 'Inhaltsstoffe' },
      { id: 2, name: 'Starker Freund des Atems', description: 'Akute Hals-Rachen-Kehlkopf-Entzündung' },
    ];
    this.dataSource2 = new MatTableDataSource(recipeTemplate);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource2.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    console.log(this.getId);
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  applyFilter2(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource2.filter = filterValue;
  }

  doSomething(row: { id: number; }) {
    this.getId = row.id;
    this.selectedRowIndex = row.id;
    console.log(this.selectedRowIndex);
    console.log(this.getId);
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: RecipeData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
