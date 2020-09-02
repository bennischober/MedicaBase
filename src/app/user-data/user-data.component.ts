import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  accountForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  // Password
  matIcon = 'visibility_off';
  passwordType = 'password';
  passwordShown = false;

  constructor(
    private formBuilder: FormBuilder,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      nameControl: [''],
      surnameControl: [''],
      emailControl: ['' , [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      passwordControl: ['', [Validators.required, Validators.minLength(8)]],
      confirmPasswordControl: ['', [Validators.minLength(8)]]
    }, { validator: this.checkPasswords });

    this.accountForm.get('nameControl').setValue('Benjamin');
    this.accountForm.get('surnameControl').setValue('Schober');
    this.accountForm.get('emailControl').setValue('bennischober001@gmail.com');
    this.accountForm.get('passwordControl').setValue('passwort1234');
    this.accountForm.get('confirmPasswordControl').setValue('passwort1234');
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    // tslint:disable-next-line:prefer-const
    let pass = group.controls.passwordControl.value;
    // tslint:disable-next-line:prefer-const
    let confirmPass = group.controls.confirmPasswordControl.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  changeData() {
    console.log('EY!');
  }

  onSubmit() {
    console.log(this.accountForm.value);
  }

  togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
      this.matIcon = 'visibility_off';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
      this.matIcon = 'visibility';
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
    });
  }
}
