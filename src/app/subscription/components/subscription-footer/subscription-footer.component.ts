import { Component, OnInit } from '@angular/core';
import { LOGO_BLACK_PATH } from 'src/app/core/constants/imgs-paths';

@Component({
  selector: 'app-subscription-footer',
  templateUrl: './subscription-footer.component.html',
  styleUrls: ['./subscription-footer.component.scss'],
})
export class SubscriptionFooterComponent implements OnInit {
  logoPath!: string;
  navLinks = ['overview', 'help', 'privacy'];
  constructor() { }

  ngOnInit() {
    this.getLogoPath();
  }

  getLogoPath(): void {
    this.logoPath = LOGO_BLACK_PATH;
  }

}
