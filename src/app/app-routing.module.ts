import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostumerDataComponent } from './costumer-data/costumer-data.component';
import { ReceiptDataComponent } from './receipt-data/receipt-data.component';
import { CreateCostumerComponent } from './create-costumer/create-costumer.component';

const routes: Routes = [
  { path: 'costumer-data', component: CostumerDataComponent },
  { path: 'receipt-data', component: ReceiptDataComponent },
  { path: 'create-costumer', component: CreateCostumerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
