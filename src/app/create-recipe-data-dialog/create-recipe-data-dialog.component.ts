import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Group {
  value: number;
  viewValue: string;
}

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-create-recipe-data-dialog',
  templateUrl: './create-recipe-data-dialog.component.html',
  styleUrls: ['./create-recipe-data-dialog.component.css']
})
export class CreateRecipeDataDialogComponent implements OnInit {

  groups: Group[] = [
    { value: 0, viewValue: 'Rohdroge' },
    { value: 1, viewValue: 'Tropfen' },
    { value: 2, viewValue: 'Granulate' },
    { value: 3, viewValue: 'Tabletten' }
  ];

  constructor(
    public dialogRef: MatDialogRef<CreateRecipeDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() { }

  onClick() {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
