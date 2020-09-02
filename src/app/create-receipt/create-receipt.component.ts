import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateReceiptDialogComponent } from '../create-receipt-dialog/create-receipt-dialog.component';
import { CreateReceiptSearchUserDialogComponent } from '../create-receipt-search-user-dialog/create-receipt-search-user-dialog.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DataServiceService } from '../data-service.service';

export interface RecipeData {
  id: number;
  type: number;
  nameCN: string;
  nameLAT: string;
  dose: number;
  days: number;
}

export interface Salution {
  value: number;
  viewValue: string;
}

export class UserData {
  constructor(
    public titledb: string,
    public genderdb: number,
    public datedb: Date,
    public namedb: string,
    public surnamedb: string,             // Für diese Daten Funktion, die den Datensatz
    public streetdb: string,      // per ID identifizert und dann surnamedb = $query.surname
    public housenumberdb: string,
    public citydb: string,
    public plzdb: number,
    public phonedb: string,
    public faxdb: string,
    public insurancedb: string,
    public insurancenumberdb: string,
  ) { }
}

const USER_DATA: UserData[] = [
  {
    titledb: 'Prof. Dr.', genderdb: 1, datedb: new Date('11.11.1984'), namedb: 'Joachim',
    surnamedb: 'Schmidt', streetdb: 'Weichnerstraße', housenumberdb: '10a', citydb: 'Kernten',
    plzdb: 87651, phonedb: '016028271722', faxdb: '028324923423',
    insurancedb: 'Techniker Krankenkasse', insurancenumberdb: '93482374782'
  },
  {
    titledb: 'MSc.', genderdb: 2, datedb: new Date('03.05.1990'), namedb: 'Maja',
    surnamedb: 'Müller', streetdb: 'Erlenbergerstraße', housenumberdb: '1', citydb: 'Regensburg',
    plzdb: 93047, phonedb: '017693892348', faxdb: '027624946283',
    insurancedb: 'Allgemeine Ortskrankenkasse', insurancenumberdb: '464356345'
  },
  {
    titledb: 'Dr. med. dent.', genderdb: 1, datedb: new Date('09.04.1958'), namedb: 'Max',
    surnamedb: 'Geiger', streetdb: 'Hauptstraße', housenumberdb: '16c', citydb: 'Fürstenfeldbruck',
    plzdb: 82256, phonedb: '017193895378', faxdb: '027834936243',
    insurancedb: 'Betriebskrankenkasse', insurancenumberdb: '2342567875'
  },
];

enum Gender {
  NO = 0,
  MALE = 1,
  FEMALE = 2,
}

const RECIPE_DATA: RecipeData[] = [
  { id: 0, type: 1, nameCN: 'SHE GAN', nameLAT: 'Belamcandae sinensis', dose: 13, days: 1 },
  { id: 1, type: 2, nameCN: 'WU JIA PI', nameLAT: 'ACANTHOPANACIS radicis', dose: 16, days: 4 },
  { id: 2, type: 4, nameCN: 'LU HUI', nameLAT: 'Aloes Herba', dose: 17, days: 4 },
];

@Component({
  selector: 'app-create-receipt',
  templateUrl: './create-receipt.component.html',
  styleUrls: ['./create-receipt.component.css'],
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

export class CreateReceiptComponent implements OnInit {
  saveForm1: FormGroup;
  recipeSaveForm: FormGroup;

  displayedColumns: string[] = ['type', 'nameCN', 'nameLAT', 'dose', 'days'];
  dataSource = RECIPE_DATA;

  // PREVIEW TEXT
  company = `Benni's Praxis für Naturheilkunde`;
  person = `Benjamin Schober, Heilpraktiker`;
  adress = 'Kurze Gasse 14';
  city =  '87541 Bad Hindelang';
  setNewDate: number = Date.now();

  // User Message -> Welcher nutzer angeklickt wurde; kommt vom search-user-dialog
  userMessage: number;

  // setNewDays()
  daysString: string;
  inputNumberValue: number;

  // hover Text
  hoverText: string;

  // USER - auslagern in Klasse
  /*
  titledb = 'Prof.';
  genderdb = 2;
  datedb = new Date(('10.12.1990'));
  namedb = 'Peter';
  surnamedb = 'Mayer';             // Für diese Daten Funktion, die den Datensatz
  streetdb = 'Musterstraße';       // per ID identifizert und dann surnamedb = $query.surname
  housenumberdb = 7;
  citydb = 'Testhausen';
  plzdb = '87541';
  phonedb = '01209123812';
  faxdb = '0923480234';
  insurancedb = 'Techniker Krankenkasse';
  insurancenumberdb = '23213123921';

*/

  // RECIPE - auslager in Klasse
  typedb = 3;
  nameCN = 'KAKA';
  nameLAT = 'KOKO';
  nameDE = 'KIKI';
  nameENG = 'KEKE';
  dose = 15;
  dose2dAr: number[][] = [];
  doseAr: number[] = [];
  doseMaxArray: number[] = [];
  days = 5;
  doseMax = 0;

  // Recipe calculation
  getId: number;
  selectedRowIndex: number;
  getSecondAr: number;

  // Row.Salution
  salutions: Salution[] = [
    { value: Gender.NO, viewValue: 'Keine Angabe' },
    { value: Gender.MALE, viewValue: 'Herr' },
    { value: Gender.FEMALE, viewValue: 'Frau' }
  ];

  constructor(
    public dialog: MatDialog,
    private msgdata: DataServiceService) {}

  ngOnInit() {
    // Kundendaten
    this.saveForm1 = new FormGroup({
      titleControl: new FormControl(''),
      genderControl: new FormControl(''),
      dateControl: new FormControl(''),
      nameControl: new FormControl(''),
      surnameControl: new FormControl(''),
      streetControl: new FormControl(''),
      housenumberControl: new FormControl(''),
      cityControl: new FormControl(''),
      plzControl: new FormControl(''),
      phoneControl: new FormControl(''),
      faxControl: new FormControl(''),
      insuranceControl: new FormControl(''),
      insurancenumberControl: new FormControl(''),
    });

    /*
        this.saveForm1.get('titleControl').setValue(this.titledb);
        this.saveForm1.get('genderControl').setValue(this.genderdb);
        this.saveForm1.get('dateControl').setValue(this.datedb);
        this.saveForm1.get('nameControl').setValue(this.namedb);
        this.saveForm1.get('surnameControl').setValue(this.surnamedb);
        this.saveForm1.get('streetControl').setValue(this.streetdb);
        this.saveForm1.get('housenumberControl').setValue(this.housenumberdb);
        this.saveForm1.get('cityControl').setValue(this.citydb);
        this.saveForm1.get('plzControl').setValue(this.plzdb);
        this.saveForm1.get('phoneControl').setValue(this.phonedb);
        this.saveForm1.get('faxControl').setValue(this.faxdb);
        this.saveForm1.get('insuranceControl').setValue(this.insurancedb);
        this.saveForm1.get('insurancenumberControl').setValue(this.insurancenumberdb);
    */
    // REZEPTDATEN TABELLE

    this.recipeSaveForm = new FormGroup({
      doseControl: new FormControl(''),
      daysControl: new FormControl(''),
    });

    /*
        for (this.i = 0; this.i < this.doseAr.length; this.i++ ) {
          this.recipeSaveForm.get('doseControl').setValue(this.doseAr[this.i]);
        }*/
    this.recipeSaveForm.get('doseControl').setValue(this.dose); // ID.dose?
    this.recipeSaveForm.get('daysControl').setValue(this.days);
    this.days = this.recipeSaveForm.get('daysControl').value;

    this.msgdata.currentUserMessage.subscribe(userMessage => this.userMessage = userMessage);
  }


  /*-------------------------------------------------------------------------------- */

  // USERDATEN ÄNDERN -> Kann alles wieder raus, später mit variablen machen!
  // also anand der ID

  changeUserData() {
    // tslint:disable-next-line:triple-equals
    if (this.userMessage == 1) {
      this.saveForm1.get('titleControl').setValue('Prof. Dr.');
      this.saveForm1.get('genderControl').setValue(1);
      this.saveForm1.get('dateControl').setValue(new Date('11.11.1984'));
      this.saveForm1.get('nameControl').setValue('Joachim');
      this.saveForm1.get('surnameControl').setValue('Schmidt');
      this.saveForm1.get('streetControl').setValue('Weichnerstraße');
      this.saveForm1.get('housenumberControl').setValue('10a');
      this.saveForm1.get('cityControl').setValue('Kernten');
      this.saveForm1.get('plzControl').setValue('87651');
      this.saveForm1.get('phoneControl').setValue('016028271722');
      this.saveForm1.get('faxControl').setValue('028324923423');
      this.saveForm1.get('insuranceControl').setValue('Techniker Krankenkasse');
      this.saveForm1.get('insurancenumberControl').setValue('93482374782');
    // tslint:disable-next-line:triple-equals
    } else if (this.userMessage == 2) {
      this.saveForm1.get('titleControl').setValue('MSc.');
      this.saveForm1.get('genderControl').setValue(2);
      this.saveForm1.get('dateControl').setValue(new Date('03.05.1990'));
      this.saveForm1.get('nameControl').setValue('Maja');
      this.saveForm1.get('surnameControl').setValue('Müller');
      this.saveForm1.get('streetControl').setValue('Erlenbergerstraße');
      this.saveForm1.get('housenumberControl').setValue('1');
      this.saveForm1.get('cityControl').setValue('Regensburg');
      this.saveForm1.get('plzControl').setValue('93047');
      this.saveForm1.get('phoneControl').setValue('017693892348');
      this.saveForm1.get('faxControl').setValue('027624946283');
      this.saveForm1.get('insuranceControl').setValue('Allgemeine Ortskrankenkasse');
      this.saveForm1.get('insurancenumberControl').setValue('464356345');
    // tslint:disable-next-line:triple-equals
    } else if (this.userMessage == 3) {
      this.saveForm1.get('titleControl').setValue('Dr. med. dent.');
      this.saveForm1.get('genderControl').setValue(1);
      this.saveForm1.get('dateControl').setValue(new Date('09.04.1958'));
      this.saveForm1.get('nameControl').setValue('Max');
      this.saveForm1.get('surnameControl').setValue('Geiger');
      this.saveForm1.get('streetControl').setValue('Hauptstraße');
      this.saveForm1.get('housenumberControl').setValue('16c');
      this.saveForm1.get('cityControl').setValue('Fürstenfeldbruck');
      this.saveForm1.get('plzControl').setValue('82256');
      this.saveForm1.get('phoneControl').setValue('017193895378');
      this.saveForm1.get('faxControl').setValue('027834936243');
      this.saveForm1.get('insuranceControl').setValue('Betriebskrankenkasse');
      this.saveForm1.get('insurancenumberControl').setValue('2342567875');
    }
  }



  // REZEPT TABELLE GRAMM ZAHL ÄNDERN + TAGE

  /* von Google
    getTotalWeight() {
      return RECIPE_DATA.map(t => t.dose).reduce((acc, value) => acc + value, 0);
    }
  */
  getMaxGramm() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.doseAr.length; i++) {
      this.doseMax += this.doseAr[i];
    }
    console.log(this.doseMax);
    console.log(this.doseAr);
  }

  setGramm(row: { id: number; }) {
    this.getId = row.id;
    this.getSecondAr = this.getId + this.getId;
    // -> suche nach getId in getSecondAr
    // if (this.dose2dAr.map([this.getId], 1)) {
    //   this.dose2dAr.fill([this.recipeSaveForm.get('doseControl').value]);
    // } else {
    //
    // }
    this.dose2dAr.push([this.getId], [this.recipeSaveForm.get('doseControl').value]);
    this.doseAr.push(this.recipeSaveForm.get('doseControl').value);
    console.log(this.dose2dAr);
    console.log(this.getSecondAr);
  }

  doSomething(row: { id: number; }) {
    this.getId = row.id;
    this.selectedRowIndex = row.id;
    this.doseMaxArray.push(this.selectedRowIndex);
    console.log(this.selectedRowIndex);
  }

  setDays() {
    this.days = this.recipeSaveForm.get('daysControl').value;
  }

  /*-------------------------------------------------------------------------------- */

  // DIALOGE FÜR KUNDENSUCHE

  openUserDialog(): void {
    // this.dialog.open(OfficeDataDialogComponent);
    const dialogRef = this.dialog.open(CreateReceiptSearchUserDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.changeUserData();
    });
  }


  /*-------------------------------------------------------------------------------- */

  // DIALOG FÜR REZEPTSUCHE

  openRecipeDialog(): void {
    // this.dialog.open(OfficeDataDialogComponent);
    const dialogRef = this.dialog.open(CreateReceiptDialogComponent, {
      width: '1000px',
    });
  }


  /*-------------------------------------------------------------------------------- */

  // SET HOVER TEXT

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

  /*
    setNewDays(inputValue: string, inputNumberValue: number) {
      inputValue = inputValue.trim();
      inputNumberValue = +inputValue;
      this.days = inputNumberValue;
    }
  */
}
