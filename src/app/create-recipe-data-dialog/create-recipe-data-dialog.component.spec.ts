import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeDataDialogComponent } from './create-recipe-data-dialog.component';

describe('CreateRecipeDataDialogComponent', () => {
  let component: CreateRecipeDataDialogComponent;
  let fixture: ComponentFixture<CreateRecipeDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipeDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipeDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
