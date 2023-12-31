import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-subscription-form',
  templateUrl: './user-subscription-form.component.html',
  styleUrls: ['./user-subscription-form.component.scss'],
})
export class UserSubscriptionFormComponent implements OnInit {
  @Input() userInfoForm!: FormGroup<any>;
  @Input() grades: string[] = [];
  @Input() topics: string[] = [];
  MAX_TOPICS_COUNT = 3;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.fillTopics();
  }

  fillTopics(): void {
    this.topicsControl.controls = this.topics.map(topic => this.fb.control(false));
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

  get topicsControl(): FormArray {
    return this.userInfoForm.get('topics') as FormArray;
  }

  selectTopic(index: number): void {
    const control = this.topicsControl.at(index) as FormControl<boolean>;
    if (control.value || this.checkSelectedTopicsCount()) {
      control.patchValue(!control.value);
      this.topicsControl.updateValueAndValidity();
    } else {
      console.log('max topics count reached');
    }
  }

  checkSelectedTopicsCount(): boolean {
    return this.topicsControl.controls.filter(control => control.value).length < this.MAX_TOPICS_COUNT;
  }

}
