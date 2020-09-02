import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-costumer-data-dialog',
  templateUrl: './costumer-data-dialog.component.html',
  styleUrls: ['./costumer-data-dialog.component.css']
})

export class CostumerDataDialogComponent implements OnInit {

  deleteUserMessage: number;
  setName: string;
  setSurname: string;

  constructor(public dialogRef: MatDialogRef<CostumerDataDialogComponent>,
              private data: DataServiceService) { }

  ngOnInit() {
    this.data.currentDeleteUserMessage.subscribe(deleteUserMessage => this.deleteUserMessage = deleteUserMessage);

    if (this.deleteUserMessage ===  1) {
      this.setName = 'Joachim';
      this.setSurname = 'Schmidt';
    } else if (this.deleteUserMessage ===  2) {
      this.setName = 'Maja';
      this.setSurname = 'Müller';
    } else if (this.deleteUserMessage ===  3) {
      this.setName = 'Max';
      this.setSurname = 'Geiger';
    } else if (this.deleteUserMessage ===  3) {
      this.setName = 'Crescentia';
      this.setSurname = 'Jöllenbeck';
    }
  }

  onClick() {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
