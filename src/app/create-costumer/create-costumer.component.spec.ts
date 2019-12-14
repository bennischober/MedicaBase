import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCostumerComponent } from './create-costumer.component';

describe('CreateCostumerComponent', () => {
  let component: CreateCostumerComponent;
  let fixture: ComponentFixture<CreateCostumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCostumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
