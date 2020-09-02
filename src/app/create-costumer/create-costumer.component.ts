import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Salution {
  value: number;
  viewValue: string;
}

enum Gender {
  NO = 0,
  MALE = 1,
  FEMALE = 2,
}


@Component({
  selector: 'app-create-costumer',
  templateUrl: './create-costumer.component.html',
  styleUrls: ['./create-costumer.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})

export class CreateCostumerComponent implements OnInit {
  saveForm1: FormGroup;

  // TAB CHANGE
  selectedIndex = 0;
  maxNumberOfTabs = 2;

  salutions: Salution[] = [
    {value: Gender.NO, viewValue: 'Keine Angabe'},
    {value: Gender.MALE, viewValue: 'Herr'},
    {value: Gender.FEMALE, viewValue: 'Frau'}
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.saveForm1 = new FormGroup({
      genderControl: new FormControl('', Validators.required),
      titleControl: new FormControl(''),
      nameControl: new FormControl('', Validators.required),
      surnameControl: new FormControl('', Validators.required),
      dateControl: new FormControl('', Validators.required),
      streetControl: new FormControl('', Validators.required),
      housenumberControl: new FormControl('', Validators.required),
      plzControl: new FormControl('', Validators.required),
      cityControl: new FormControl('', Validators.required),
      insuranceControl: new FormControl('', Validators.required),
      insuranceNumberControl: new FormControl('', Validators.required),
     });
  }

  onSubmit() {
    console.log(this.saveForm1.value);
    console.log('Das sollte reichen ;D');
    this.openSnackBar('Der Kunde wurde gespeichert!', 'Ok');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  changeTab() {
    // tslint:disable-next-line: triple-equals
    if (this.selectedIndex != this.maxNumberOfTabs) {
      this.selectedIndex++;
    }
  }

  changeTabBack() {
    // tslint:disable-next-line:triple-equals
    if (this.selectedIndex <= this.maxNumberOfTabs) {
      this.selectedIndex--;
    }
  }

  tabClick($event) {
    if ($event.index === 0) {
      this.selectedIndex = 0;
      console.log($event.index);
    } else if ($event.index === 1) {
      this.selectedIndex = 1;
      console.log($event.index);
    } else if ($event.index === 2) {
      this.selectedIndex = 2;
      console.log($event.index);
    }
  }

  reload() {
    this.selectedIndex = 0;
  }

  add() {
    console.log(this.saveForm1.value); // Datenbank connection bzw. einfügen in DB
  }
}
