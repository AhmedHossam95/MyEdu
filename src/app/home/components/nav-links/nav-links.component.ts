import { Component, OnInit } from '@angular/core';
import { LOGO_BLACK_PATH } from 'src/app/core/constants/imgs-paths';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
})
export class NavLinksComponent implements OnInit {

  logoPath!: string;
  links: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getLogoPath();
    this.getLinks();
  }

  getLogoPath(): void {
    this.logoPath = LOGO_BLACK_PATH;
  }

  getLinks(): void {
    this.links = ['link one', 'link two', 'link three', 'link four', 'link five'];
  }
}
