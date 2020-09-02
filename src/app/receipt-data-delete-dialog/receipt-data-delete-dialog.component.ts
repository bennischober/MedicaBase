import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-receipt-data-delete-dialog',
  templateUrl: './receipt-data-delete-dialog.component.html',
  styleUrls: ['./receipt-data-delete-dialog.component.css']
})
export class ReceiptDataDeleteDialogComponent implements OnInit {
  // getMessage
  recipeMessage: number;
  setName: string;

  constructor(public dialogRef: MatDialogRef<ReceiptDataDeleteDialogComponent>,
              private msgdata: DataServiceService) { }

  ngOnInit() {
    this.msgdata.currentRecipeEditMessage.subscribe(recipeMessage => this.recipeMessage = recipeMessage);

    // tslint:disable: triple-equals
    if (this.recipeMessage == 1) {
      this.setName = 'Rhiz. schwertliliengew.';
    } else if (this.recipeMessage == 2) {
      this.setName = 'Stachelpanax';
    } else if (this.recipeMessage == 3) {
      this.setName = 'Aloesaft';
    } else if (this.recipeMessage == 4) {
      this.setName = 'Färberwald Wurzel';
    } else if (this.recipeMessage == 5) {
      this.setName = 'Ingwergewächs';
    }
  }

  onClick() {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
