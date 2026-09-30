import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Company } from '../company';
import { CompanyProfileService } from '../company-profile.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass']
})
export class CompanyProfileComponent implements OnInit {

  public company: Company;
  public formControlName = new FormControl('', [Validators.required]);
  public formControlAddress = new FormControl('', [Validators.required]);
  public formControlEmail = new FormControl('', [Validators.required, Validators.email]);
  public formControlPhone = new FormControl('', [Validators.required]);

  constructor(private companyProfileService: CompanyProfileService) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    const storedCompany = this.companyProfileService.getCompany();
    if (storedCompany) {
      this.company = new Company(storedCompany.name, storedCompany.address, storedCompany.email, storedCompany.phone);
    } else {
      this.company = new Company('Add a company name', 'Add an address', 'addEmail@example.com', 'Add a phone');
    }
    this.formControlName.setValue(this.company.name);
    this.formControlAddress.setValue(this.company.address);
    this.formControlEmail.setValue(this.company.email);
    this.formControlPhone.setValue(this.company.phone);
  }

  onSubmit(): void {
    if (this.formControlName.hasError('required')
    || this.formControlAddress.hasError('required')
    || this.formControlEmail.hasError('required')
    || this.formControlEmail.hasError('email')
    || this.formControlPhone.hasError('required')) {
    } else {
      this.company.name = this.formControlName.value;
      this.company.address = this.formControlAddress.value;
      this.company.email = this.formControlEmail.value;
      this.company.phone = this.formControlPhone.value;
      this.companyProfileService.setCompany(this.company);
    }
  }

  getErrorMessageName() {
    return this.formControlName.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessageAddress() {
    return this.formControlAddress.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessageEmail() {
    return this.formControlEmail.hasError('required') ? 'You must enter a value' :
        this.formControlEmail.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePhone() {
    return this.formControlPhone.hasError('required') ? 'You must enter a value' : '';
  }
}
