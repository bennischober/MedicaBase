import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerDataDialogComponent } from './costumer-data-dialog.component';

describe('CostumerDataDialogComponent', () => {
  let component: CostumerDataDialogComponent;
  let fixture: ComponentFixture<CostumerDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumerDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
