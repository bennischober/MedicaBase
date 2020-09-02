import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptTemplateCreateDialogComponent } from './receipt-template-create-dialog.component';

describe('ReceiptTemplateCreateDialogComponent', () => {
  let component: ReceiptTemplateCreateDialogComponent;
  let fixture: ComponentFixture<ReceiptTemplateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptTemplateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptTemplateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
