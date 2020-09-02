import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDataDialogComponent } from './office-data-dialog.component';

describe('OfficeDataDialogComponent', () => {
  let component: OfficeDataDialogComponent;
  let fixture: ComponentFixture<OfficeDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
