import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersViewAllComponent } from './components/customers-view-all/customers-view-all.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { PmoHomeComponent } from './components/pmo-home/pmo-home.component';

const routes: Routes = [
  {path:"customer-view", component:CustomersViewAllComponent},
  {path:"add-customer-view", component:AddCustomerComponent},
  
  
  
  {path:"pmo-home", component:PmoHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
