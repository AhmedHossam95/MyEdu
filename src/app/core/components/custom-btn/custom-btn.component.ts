import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss'],
})
export class CustomBtnComponent implements OnInit {
  @Input() label!: string;
  @Input() width!: number;
  @Input() height!: number;
  constructor() { }

  ngOnInit() { }

}
