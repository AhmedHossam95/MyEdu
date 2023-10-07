import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-date-control',
  templateUrl: './child-date-control.component.html',
  styleUrls: ['./child-date-control.component.scss'],
})
export class ChildDateControlComponent implements OnInit {
  dateControls: any[] = [];
  dummyVals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  label = 'child’s date of bBirth';
  @Input() dateControl!: FormControl<string>;
  @Input() monthControl!: FormControl<string>;
  @Input() yearControl!: FormControl<string>;
  constructor() { }

  ngOnInit() {
    this.getDateFormControls();
    console.log('dateControls', this.dateControls);
  }

  getDateFormControls(): void {
    this.dateControls = [{ placeholder: 'date', control: this.dateControl },
    { placeholder: 'month', control: this.monthControl }, { placeholder: 'year', control: this.yearControl }];
  }

}
