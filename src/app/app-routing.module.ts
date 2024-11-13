import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersViewAllComponent } from './components/customers-view-all/customers-view-all.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { PmoHomeComponent } from './components/pmo-home/pmo-home.component';
import { LoginComponent } from './components/login/login.component';
import { InterviewerHomeComponent } from './components/interviewer-home/interviewer-home.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SkillManagementComponent } from './components/skill-management/skill-management.component';
import { CandidateHomeComponent } from './components/candidate-home/candidate-home.component';
import { ConfigurablePageComponent } from './components/configurable-page/configurable-page.component';

const routes: Routes = [
  {path:"customer-view", component:CustomersViewAllComponent},
  {path:"login", component:LoginComponent},
  {path:"interviewer-home", component:InterviewerHomeComponent},
  {path:"", component:LandingpageComponent},
  {path:"home", component:LandingpageComponent},
  {path:"add-customer", component:AddCustomerComponent},
  {path:"candidate-home", component:CandidateHomeComponent},
  {path:"skill-management", component:SkillManagementComponent},
  {path:"configurable-page", component:ConfigurablePageComponent},
  
  
  {path:"pmo-home", component:PmoHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
