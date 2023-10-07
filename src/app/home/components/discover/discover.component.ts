import { Component, OnInit } from '@angular/core';
import { STEPS, Step } from '../../models/steps.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  steps: Step[] = [];

  constructor() { }

  ngOnInit() {
    this.getSteps();
  }

  getSteps(): void {
    this.steps = STEPS;
  }


}
