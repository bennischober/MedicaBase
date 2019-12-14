import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../create-costumer/date.adapter';


export interface Salution {
  value: number;
  viewValue: string;
}

export interface Title {
  value: number;
  viewValue: string;
}

enum Gender {
  NO = 0,
  MALE = 1,
  FEMALE = 2,
}

enum TitleE {
  NO = 0,
  PROF = 1,
  DR = 2,
  PRDR = 3,
}


@Component({
  selector: 'app-create-costumer',
  templateUrl: './create-costumer.component.html',
  styleUrls: ['./create-costumer.component.css'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})

export class CreateCostumerComponent implements OnInit {
  saveForm1: FormGroup;

  salutions: Salution[] = [
    {value: Gender.NO, viewValue: 'Keine Angabe'},
    {value: Gender.MALE, viewValue: 'Herr'},
    {value: Gender.FEMALE, viewValue: 'Frau'}
  ];

  titles: Title[] = [
    {value: TitleE.NO, viewValue: 'Kein Titel'},
    {value: TitleE.DR, viewValue: 'Dr.'},
    {value: TitleE.PROF, viewValue: 'Prof.'},
    {value: TitleE.PRDR, viewValue: 'Prof. Dr.'}
  ];
  constructor() {}

  ngOnInit() {
    this.saveForm1 = new FormGroup({
      genderControl: new FormControl('', Validators.required),
      titleControl: new FormControl('', Validators.required),
      nameControl: new FormControl('', Validators.required),
      surnameControl: new FormControl('', Validators.required),
      streetControl: new FormControl('', Validators.required),
      housenumberControl: new FormControl('', Validators.required),
      plzControl: new FormControl('', Validators.required),
      cityControl: new FormControl('', Validators.required),
      insuranceControl: new FormControl('', Validators.required),
      insuranceNumberControl: new FormControl('', Validators.required),
     });
  }

  onSubmit() {
    console.warn('Your order has been submitted');
  }

  reload() {
  window.location.reload();
  }
}
