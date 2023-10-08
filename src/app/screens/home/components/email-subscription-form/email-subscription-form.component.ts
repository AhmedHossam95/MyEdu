import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './email-subscription-form.component.html',
  styleUrls: ['./email-subscription-form.component.scss'],
})
export class EmailSubscriptionFormComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  subscribe(form: NgForm): void {
    if (form.invalid) return;
  }
}
