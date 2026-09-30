import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidate/candidates/candidates.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CandidateDetailComponent } from './candidate/candidate-detail/candidate-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'companyProfile', component: CompanyProfileComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'candidateDetail/:id', component: CandidateDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
