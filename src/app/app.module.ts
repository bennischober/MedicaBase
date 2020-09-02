import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerDataComponent } from './costumer-data/costumer-data.component';
import { CreateCostumerComponent } from './create-costumer/create-costumer.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { EditCostumerComponent } from './edit-costumer/edit-costumer.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CreateReceiptComponent } from './create-receipt/create-receipt.component';
import { ReceiptHistoryComponent } from './receipt-history/receipt-history.component';
import { ReceiptTemplateComponent } from './receipt-template/receipt-template.component';
import { OfficeDataComponent } from './office-data/office-data.component';
import { OfficeDataDialogComponent } from './office-data-dialog/office-data-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';
import { CreateRecipeDataDialogComponent } from './create-recipe-data-dialog/create-recipe-data-dialog.component';
import { CostumerDataDialogComponent } from './costumer-data-dialog/costumer-data-dialog.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CreateReceiptDialogComponent } from './create-receipt-dialog/create-receipt-dialog.component';
import { CreateReceiptSearchUserDialogComponent } from './create-receipt-search-user-dialog/create-receipt-search-user-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ReceiptDataDeleteDialogComponent } from './receipt-data-delete-dialog/receipt-data-delete-dialog.component';
import { ReceiptTemplateEditDialogComponent } from './receipt-template-edit-dialog/receipt-template-edit-dialog.component';
import { ReceiptTemplateDeleteDialogComponent } from './receipt-template-delete-dialog/receipt-template-delete-dialog.component';
import { ReceiptTemplateCreateDialogComponent } from './receipt-template-create-dialog/receipt-template-create-dialog.component';
import { UserDataLoginDialogComponent } from './user-data-login-dialog/user-data-login-dialog.component';
import { RecipeDataInfoDialogComponent } from './recipe-data-info-dialog/recipe-data-info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CostumerDataComponent,
    CreateCostumerComponent,
    EditCostumerComponent,
    CreateReceiptComponent,
    ReceiptHistoryComponent,
    ReceiptTemplateComponent,
    OfficeDataComponent,
    OfficeDataDialogComponent,
    DashboardComponent,
    RecipeDataComponent,
    CreateRecipeDataDialogComponent,
    CostumerDataDialogComponent,
    UserDataComponent,
    CreateReceiptDialogComponent,
    CreateReceiptSearchUserDialogComponent,
    EditRecipeComponent,
    ReceiptDataDeleteDialogComponent,
    ReceiptTemplateEditDialogComponent,
    ReceiptTemplateDeleteDialogComponent,
    ReceiptTemplateCreateDialogComponent,
    UserDataLoginDialogComponent,
    RecipeDataInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    RouterModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatDividerModule,
    MaterialFileInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  entryComponents: [
    OfficeDataDialogComponent,
    CreateRecipeDataDialogComponent,
    CostumerDataDialogComponent,
    CreateReceiptDialogComponent,
    CreateReceiptSearchUserDialogComponent,
    EditRecipeComponent,
    ReceiptDataDeleteDialogComponent,
    ReceiptTemplateEditDialogComponent,
    ReceiptTemplateDeleteDialogComponent,
    ReceiptTemplateCreateDialogComponent,
    UserDataLoginDialogComponent,
    RecipeDataInfoDialogComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
