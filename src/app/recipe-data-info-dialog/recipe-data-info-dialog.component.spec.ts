import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDataInfoDialogComponent } from './recipe-data-info-dialog.component';

describe('RecipeDataInfoDialogComponent', () => {
  let component: RecipeDataInfoDialogComponent;
  let fixture: ComponentFixture<RecipeDataInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDataInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDataInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
