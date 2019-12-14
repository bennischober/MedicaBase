import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rezept Test'; /*Später noch in richtigen Namen ändern */

  isActive = false;
  isActive1 = false;
  isActive2 = false;

  onClickBt() {
    this.isActive = true;
    this.isActive1 = false;
    this.isActive2 = false;
  }

  onClickBt1() {
    this.isActive = false;
    this.isActive1 = true;
    this.isActive2 = false;
  }

  onClickBt2() {
    this.isActive = false;
    this.isActive1 = false;
    this.isActive2 = true;
  }
}
