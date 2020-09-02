import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDataDeleteDialogComponent } from './receipt-data-delete-dialog.component';

describe('ReceiptDataDeleteDialogComponent', () => {
  let component: ReceiptDataDeleteDialogComponent;
  let fixture: ComponentFixture<ReceiptDataDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptDataDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptDataDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
