import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptTemplateDeleteDialogComponent } from './receipt-template-delete-dialog.component';

describe('ReceiptTemplateDeleteDialogComponent', () => {
  let component: ReceiptTemplateDeleteDialogComponent;
  let fixture: ComponentFixture<ReceiptTemplateDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptTemplateDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptTemplateDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
