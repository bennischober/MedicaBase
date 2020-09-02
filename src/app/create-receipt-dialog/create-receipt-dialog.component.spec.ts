import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReceiptDialogComponent } from './create-receipt-dialog.component';

describe('CreateReceiptDialogComponent', () => {
  let component: CreateReceiptDialogComponent;
  let fixture: ComponentFixture<CreateReceiptDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReceiptDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReceiptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
