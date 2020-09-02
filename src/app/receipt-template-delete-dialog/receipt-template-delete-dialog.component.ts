import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-receipt-template-delete-dialog',
  templateUrl: './receipt-template-delete-dialog.component.html',
  styleUrls: ['./receipt-template-delete-dialog.component.css']
})
export class ReceiptTemplateDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReceiptTemplateDeleteDialogComponent>) { }

  ngOnInit() {}

  // deleteRecipeMessageSource ist der Message Service für hier! -> ist schon erstellt

  onClick() {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
