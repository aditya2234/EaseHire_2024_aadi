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
import { CandidateService } from './services/candidate.service';
import { InterviewerService } from './services/interviewer.service';
import { PmoHomeComponent } from './components/pmo-home/pmo-home.component';
import { LoginComponent } from './components/login/login.component';

import { CandidateOnboardingComponent } from './components/candidate-onboarding/candidate-onboarding.component';
import { EditSkillModalComponent } from './edit-skill-modal/edit-skill-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ConfigurablePageComponent } from './components/configurable-page/configurable-page.component';
import { SharedModule } from './shared/shared.module';
import { CustomersViewAllComponent } from './components/customers-view-all/customers-view-all.component';
import { AdduserComponent } from './components/adduser/adduser.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingpageComponent,
    SkillManagementComponent,
    CandidateHomeComponent,
    InterviewerHomeComponent,
    PmoHomeComponent,
    LoginComponent,
    CandidateOnboardingComponent,
    EditSkillModalComponent,
    CustomersViewAllComponent,
    AddCustomerComponent,
    AdduserComponent,
    ConfigurablePageComponent,
    PmoHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }