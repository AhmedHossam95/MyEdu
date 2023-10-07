import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscribtion-form',
  templateUrl: './subscribtion-form.component.html',
  styleUrls: ['./subscribtion-form.component.scss'],
})
export class SubscribtionFormComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  subscribe(form: NgForm): void {
    if (form.invalid) return;
    console.log(form.value);
  }
}
