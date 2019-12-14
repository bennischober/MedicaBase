import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerDataComponent } from './costumer-data.component';

describe('CostumerDataComponent', () => {
  let component: CostumerDataComponent;
  let fixture: ComponentFixture<CostumerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
