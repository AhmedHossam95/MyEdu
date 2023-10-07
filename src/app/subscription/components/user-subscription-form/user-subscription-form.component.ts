import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-subscription-form',
  templateUrl: './user-subscription-form.component.html',
  styleUrls: ['./user-subscription-form.component.scss'],
})
export class UserSubscriptionFormComponent implements OnInit {
  userInfoForm!: FormGroup<any>;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.initUserInfoForm();
  }

  initUserInfoForm(): void {
    this.userInfoForm = this.fb.group({
      contactInfo: this.userInfoFormGroupFactory(),
      childInfo: this.childInfoFormGroupFactory(),
      topics: this.fb.array([]),
    });
    console.log(this.userInfoForm.controls);
  }

  userInfoFormGroupFactory(): FormGroup<any> {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }

  childInfoFormGroupFactory(): FormGroup<any> {
    return this.fb.group({
      fullName: ['', Validators.required],
      dateOfBirth: this.dateOfBirthFormGroupFactory(),
      grade: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  dateOfBirthFormGroupFactory(): FormGroup<any> {
    return this.fb.group({
      date: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }


  get nameControl(): FormControl<string> {
    return this.userInfoForm.get('contactInfo.name') as FormControl<string>;
  }

  get emailControl(): FormControl<string> {
    return this.userInfoForm.get('contactInfo.email') as FormControl<string>;
  }

  get childNameControl(): FormControl<string> {
    return this.userInfoForm.get('childInfo.fullName') as FormControl<string>;
  }

  get dateControl(): FormControl<string> {
    return this.userInfoForm.get('childInfo.dateOfBirth.date') as FormControl<string>;
  }
  get monthControl(): FormControl<string> {
    return this.userInfoForm.get('childInfo.dateOfBirth.month') as FormControl<string>;
  }

  get yearControl(): FormControl<string> {
    return this.userInfoForm.get('childInfo.dateOfBirth.year') as FormControl<string>;
  }


  get gradeControl(): FormControl<string> {
    return this.userInfoForm.get('childInfo.grade') as FormControl<string>;
  }

  get genderControl(): FormControl<string> {
    return this.userInfoForm.get('childInfo.gender') as FormControl<string>;
  }

  // get topicsControl(): FormArr<string[]> {
  //   return this.userInfoForm.get('contactInfo.gender') as FormControl<string>;
  // }

}
