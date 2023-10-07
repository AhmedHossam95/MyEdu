import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() controlName!: string;
  @Input() control!: FormControl<unknown>;
  @Input() selectOpts: string[] = [];

  constructor() { }

  ngOnInit() { }

}
