import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerLinks: string[] = [];
  constructor() { }
  ngOnInit(): void {
    this.getFooterLinks();
  }

  getFooterLinks(): void {
    this.footerLinks = [
      'privacy policy',
      'terms of service',
      'cookies settings'
    ]
  }
}
