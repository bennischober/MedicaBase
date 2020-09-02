import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataLoginDialogComponent } from './user-data-login-dialog.component';

describe('UserDataLoginDialogComponent', () => {
  let component: UserDataLoginDialogComponent;
  let fixture: ComponentFixture<UserDataLoginDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataLoginDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
