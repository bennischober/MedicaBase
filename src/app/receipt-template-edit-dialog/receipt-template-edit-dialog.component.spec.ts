import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptTemplateEditDialogComponent } from './receipt-template-edit-dialog.component';

describe('ReceiptTemplateEditDialogComponent', () => {
  let component: ReceiptTemplateEditDialogComponent;
  let fixture: ComponentFixture<ReceiptTemplateEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptTemplateEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptTemplateEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
