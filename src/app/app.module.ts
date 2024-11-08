import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

import { SkillManagementComponent } from './components/skill-management/skill-management.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CandidateHomeComponent } from './components/candidate-home/candidate-home.component';
import { InterviewerHomeComponent } from './components/interviewer-home/interviewer-home.component';
import { CandidateService } from './services/candidate.service';
import { ButtonComponent } from './shared/button/button.component';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './shared/card/card.component';
import { LoginComponent } from './components/login/login.component';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }