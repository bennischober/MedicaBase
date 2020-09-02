import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostumerDataComponent } from './costumer-data/costumer-data.component';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';
import { CreateCostumerComponent } from './create-costumer/create-costumer.component';
import { EditCostumerComponent } from './edit-costumer/edit-costumer.component';
import { CreateReceiptComponent } from './create-receipt/create-receipt.component';
import { ReceiptHistoryComponent } from './receipt-history/receipt-history.component';
import { OfficeDataComponent } from './office-data/office-data.component';
import { ReceiptTemplateComponent } from './receipt-template/receipt-template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'costumer-data', component: CostumerDataComponent, },
  { path: 'receipt-data', component: RecipeDataComponent },
  { path: 'create-costumer', component: CreateCostumerComponent },
  { path: 'edit-costumer', component: EditCostumerComponent },
  { path: 'create-receipt', component: CreateReceiptComponent },
  { path: 'receipt-history', component: ReceiptHistoryComponent },
  { path: 'office-data', component: OfficeDataComponent },
  { path: 'receipt-template', component: ReceiptTemplateComponent },
  { path: 'user-data', component: UserDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
