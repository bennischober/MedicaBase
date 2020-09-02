import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

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
  selector: 'app-edit-costumer',
  templateUrl: './edit-costumer.component.html',
  styleUrls: ['./edit-costumer.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})

export class EditCostumerComponent implements OnInit {
  saveForm1: FormGroup;

  // TAB CHANGE
  selectedIndex = 0;
  maxNumberOfTabs = 2;

  // USER
  genderdb = 1;
  titledb = 'Prof. Dr';
  datedb = new Date(('11.11.1984'));
  namedb = 'Peter';
  surnamedb = 'Schmidt';             // Für diese Daten Funktion, die den Datensatz
  streetdb = 'Weichnerstraße';       // per ID identifizert und dann surnamedb = $query.surname
  housenumberdb = '10a';
  citydb = 'Kernten';
  plzdb = '87651';
  phonedb = '016028271722';
  faxdb = '028324923423';
  insurancedb = 'Techniker Krankenkasse';
  insurancenumberdb = '93482374782';

  salutions: Salution[] = [
    { value: Gender.NO, viewValue: 'Keine Angabe' },
    { value: Gender.MALE, viewValue: 'Herr' },
    { value: Gender.FEMALE, viewValue: 'Frau' }
  ];

  // DURCH DATEN AUS DER DB ERSETZEN!

  constructor() { }

  ngOnInit() {
    this.saveForm1 = new FormGroup({
      genderControl: new FormControl('', Validators.required),
      titleControl: new FormControl('', Validators.required),
      nameControl: new FormControl('', Validators.required),
      surnameControl: new FormControl('', Validators.required),
      dateControl: new FormControl('', Validators.required),
      streetControl: new FormControl('', Validators.required),
      housenumberControl: new FormControl('', Validators.required),
      plzControl: new FormControl('', Validators.required),
      cityControl: new FormControl('', Validators.required),
      insuranceControl: new FormControl('', Validators.required),
      insuranceNumberControl: new FormControl('', Validators.required)
    });

    // Duch DB Werte ersetzen
    this.saveForm1.get('genderControl').setValue(this.genderdb);
    this.saveForm1.get('titleControl').setValue(this.titledb);
    this.saveForm1.get('nameControl').setValue(this.namedb);
    this.saveForm1.get('surnameControl').setValue(this.surnamedb);
    this.saveForm1.get('dateControl').setValue(this.datedb);
    this.saveForm1.get('streetControl').setValue(this.streetdb);
    this.saveForm1.get('housenumberControl').setValue(this.housenumberdb);
    this.saveForm1.get('plzControl').setValue(this.plzdb);
    this.saveForm1.get('cityControl').setValue(this.citydb);
    this.saveForm1.get('insuranceControl').setValue(this.insurancedb);
    this.saveForm1.get('insuranceNumberControl').setValue(this.insurancenumberdb);
  }

  onSubmit() {
    console.log(this.saveForm1.value);
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
}
