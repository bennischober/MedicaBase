import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-office-data-dialog',
  templateUrl: './office-data-dialog.component.html',
  styleUrls: ['./office-data-dialog.component.css']
})
export class OfficeDataDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OfficeDataDialogComponent>) { }

  ngOnInit() {
  }

  onClick() {
    this.dialogRef.close(true);
    // Daten speichern
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
