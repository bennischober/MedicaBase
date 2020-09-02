import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OfficeDataDialogComponent } from '../office-data-dialog/office-data-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-office-data',
  templateUrl: './office-data.component.html',
  styleUrls: ['./office-data.component.css']
})

export class OfficeDataComponent implements OnInit {
  saveForm: FormGroup;

  public domainreg = /.+\..+/;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.saveForm = new FormGroup({
      nameControl: new FormControl('', Validators.required),
      titleControl: new FormControl('', Validators.required),
      officeControl: new FormControl('', Validators.required),
      surnameControl: new FormControl('', Validators.required),
      streetControl: new FormControl('', Validators.required),
      housenumberControl: new FormControl('', Validators.required),
      plzControl: new FormControl('', Validators.required),
      cityControl: new FormControl('', Validators.required),
      phoneControl: new FormControl('', Validators.required),
      webControl: new FormControl('', [Validators.required, Validators.pattern(this.domainreg), ]),
      emailControl: new FormControl('', [Validators.required, Validators.email, ]),
     });
  }

  onSubmit() {
    console.log('Your order has been submitted');
  }

  saveFile() {
    console.log('speichern');
  }

  // Wenn Praxisdaten existieren und Knopf nochmal betätigt wird, dann "alte" Daten anzeigen

  openDialog(): void {
   const dialogRef = this.dialog.open(OfficeDataDialogComponent , {
     width: '450px',
   });
   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
     if (confirmed) {
      this.openSnackBar('Ihre Daten wurden gespeichert!', 'Ok');
     }
   });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }
}
