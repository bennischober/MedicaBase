import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';

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
  selector: 'app-receipt-template-edit-dialog',
  templateUrl: './receipt-template-edit-dialog.component.html',
  styleUrls: ['./receipt-template-edit-dialog.component.css']
})
export class ReceiptTemplateEditDialogComponent implements OnInit {
  recipeTemplateForm: FormGroup;

  displayedColumns = ['select', 'position', 'type', 'name', 'latname', 'cnname', 'engname'];
  dataSource = new MatTableDataSource<RecipeData>(recipe);
  selection = new SelectionModel<RecipeData>(true, []);

  // getHoverText
  hoverText: string;

  // getRecipeName
  recipeName: string;

  // set Edit stuff
  setRecipeName = 'Starker Freund des Atems';
  setDescriptionName = '	Akute Hals-Rachen-Kehlkopfentzündung';

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  // tslint:disable-next-line:variable-name
  constructor(public dialogRef: MatDialogRef<ReceiptTemplateEditDialogComponent>) { }


  ngOnInit() {
    this.recipeTemplateForm = new FormGroup({
      nameControl: new FormControl(''),
      descriptionControl: new FormControl('')
    });

    this.recipeTemplateForm.get('nameControl').setValue(this.setRecipeName);
    this.recipeTemplateForm.get('descriptionControl').setValue(this.setDescriptionName);
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

  onClick() {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSubmit() {
    console.log('Speichern');
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
