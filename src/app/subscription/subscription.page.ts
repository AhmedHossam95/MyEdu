import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  userInfoForm!: FormGroup<any>;
  grades: string[] = [];
  topics: string[] = [];
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.initUserInfoForm();
    this.getGrades();
    this.getTopics();
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
      email: ['', [Validators.required, Validators.email]],
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

  getGrades(): void {
    this.grades = ['grade 1', 'grade 2', 'grade 3', 'grade 4', 'grade 5', 'grade 6', 'grade 7', 'grade 8'];
  }

  getTopics(): void {
    this.topics = ['arabic', 'islamic', 'english', 'history', 'sports'];
  }

  submitForm(): void {
    console.log('Form Submitted', this.userInfoForm.value);
  }


}
