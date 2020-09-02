import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { UserDataLoginDialogComponent } from './user-data-login-dialog/user-data-login-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Rezept Test'; /*Später noch in richtigen Namen ändern */
  otherTheme = false;
  name = 'Nachtmodus';
  message: string;
  timeIcon = 'brightness_2';
  isExpanded = false;
  menuIcon = 'menu_open'; // clear
  wasOpened = false;

  constructor(
    private data: DataServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.openDialog();
  }

  openDialog(): void {
    if (this.wasOpened === false) {
      const dialogRef = this.dialog.open(UserDataLoginDialogComponent, {
        width: '550px',
      });

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.wasOpened = true;
          this.openSnackBar('Willkommen zurück Benjamin Schober!', 'Ok');
        }
      });
    }
  }

  openSnackBar(snackbarMessage: string, action: string) {
    this.snackBar.open(snackbarMessage, action, {
      duration: 2000,
    });
  }

  // vllt noch so ändern, dass ich das mit anderen Komponenten auch kann -> input = message
  newMessage(input: string) {
    this.data.changeMessage(input);
  }

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }

  changeName() {
    if (this.otherTheme === false) {
      this.name = 'Nachtmodus';
    } else if (this.otherTheme === true) {
      this.name = 'Tagmodus';
    }
  }

  changeIcon() {
    if (this.name === 'Nachtmodus') {
      this.timeIcon = 'brightness_2';
    } else if (this.name === 'Tagmodus') {
      this.timeIcon = 'brightness_7';
    }
  }

  changeExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  changeMenuIcon() {
    if (this.isExpanded === true) {
      this.menuIcon = 'menu_open';
    } else if (this.isExpanded === false) {
      this.menuIcon = 'menu';
    }
  }
}
