import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReceiptSearchUserDialogComponent } from './create-receipt-search-user-dialog.component';

describe('CreateReceiptSearchUserDialogComponent', () => {
  let component: CreateReceiptSearchUserDialogComponent;
  let fixture: ComponentFixture<CreateReceiptSearchUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReceiptSearchUserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReceiptSearchUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
