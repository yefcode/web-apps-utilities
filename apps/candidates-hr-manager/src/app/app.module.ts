import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidate/candidates/candidates.component';
import { CandidateDetailComponent } from './candidate/candidate-detail/candidate-detail.component';
import { HomeComponent } from './home/home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { MaterialModule } from './material/material.module';
import { CommonComponentsModule } from './common/components/common-components.module';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailComponent,
    HomeComponent,
    CompanyProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonComponentsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
