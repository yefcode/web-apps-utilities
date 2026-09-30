import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  private key = 'companyKey';

  constructor() { }

  getCompany(): Company {
    return JSON.parse(localStorage.getItem(this.key));
  }

  setCompany(company: Company) {
    localStorage.setItem(this.key, JSON.stringify(company));
  }
}
