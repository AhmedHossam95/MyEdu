import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gender-control',
  templateUrl: './gender-control.component.html',
  styleUrls: ['./gender-control.component.scss'],
})
export class GenderControlComponent implements OnInit {
  genders = ['boy', 'girl'];
  @Input() control!: FormControl<string>;
  constructor() { }

  ngOnInit() { }

  setGender(gender: string): void {
    if (this.control.value === gender) return;
    this.control.setValue(gender);
  }

}
