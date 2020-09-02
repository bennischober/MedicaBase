import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-user-data-login-dialog',
  templateUrl: './user-data-login-dialog.component.html',
  styleUrls: ['./user-data-login-dialog.component.css']
})

export class UserDataLoginDialogComponent implements OnInit {
  accountForm: FormGroup;

  // new Message
  message: string;

  // Password
  matIcon = 'visibility_off';
  passwordType = 'password';
  passwordShown = false;

  constructor(
    public dialogRef: MatDialogRef<UserDataLoginDialogComponent>,
    private formBuilder: FormBuilder,
    private data: DataServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);

    this.accountForm = this.formBuilder.group({
      emailControl: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      passwordControl: ['', [Validators.required, Validators.minLength(8)]],
    }, );
  }

  newMessage(input: string) {
    this.data.changeMessage(input);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onClick(): void {
    this.dialogRef.close(true);
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

  onSubmit() {
    console.log(this.accountForm.value);
  }

}
