import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

import { SkillManagementComponent } from './components/skill-management/skill-management.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { CandidateHomeComponent } from './components/candidate-home/candidate-home.component';
import { InterviewerHomeComponent } from './components/interviewer-home/interviewer-home.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { CustomersViewAllComponent } from './components/customers-view-all/customers-view-all.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingpageComponent,
    SkillManagementComponent,
    CandidateHomeComponent,
    InterviewerHomeComponent,
    LoginComponent,
    CustomersViewAllComponent,
    AddCustomerComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }