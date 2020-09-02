import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';
import { FormControl, FormGroup } from '@angular/forms';

export interface Group {
  value: number;
  viewValue: string;
}

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

export class EditRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  // getMessage
  recipeMessage: number;

  groups: Group[] = [
    {value: 0, viewValue: 'Rohdroge'},
    {value: 1, viewValue: 'Tropfen'},
    {value: 2, viewValue: 'Granulate'},
    {value: 3, viewValue: 'Tabletten'}
  ];

  constructor(
    public dialogRef: MatDialogRef<EditRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private msgdata: DataServiceService) { }

  ngOnInit() {
    this.msgdata.currentRecipeEditMessage.subscribe(recipeMessage => this.recipeMessage = recipeMessage);
    this.recipeForm = new FormGroup({
      typeControl: new FormControl(''),
      nameDEControl: new FormControl(''),
      nameLATControl: new FormControl(''),
      nameCNControl: new FormControl(''),
      nameENGControl: new FormControl(''),
    });

    // tslint:disable-next-line:triple-equals
    if (this.recipeMessage == 1) {
      this.recipeForm.get('typeControl').setValue(3);
      this.recipeForm.get('nameDEControl').setValue('Rhiz. schwertliliengew.');
      this.recipeForm.get('nameLATControl').setValue('Belamcandae sinensis');
      this.recipeForm.get('nameCNControl').setValue('SHE GAN');
      this.recipeForm.get('nameENGControl').setValue('Iris domestica');
    // tslint:disable-next-line:triple-equals
    } else if (this.recipeMessage == 2) {
      this.recipeForm.get('typeControl').setValue(2);
      this.recipeForm.get('nameDEControl').setValue('Stachelpanax');
      this.recipeForm.get('nameLATControl').setValue('ACANTHOPANACIS radicis');
      this.recipeForm.get('nameCNControl').setValue('WU JIA PI');
      this.recipeForm.get('nameENGControl').setValue('CORTEX - efeuart');
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onClick() {
    this.dialogRef.close(true);
    // Daten speichern
    // Daten in der Tabelle neu laden!!
  }

}
