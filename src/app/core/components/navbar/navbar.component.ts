import { Component, OnInit } from '@angular/core';
import { LOGO_PATH } from '../../constants/imgs-paths';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logoPath!: string;
  constructor() { }

  ngOnInit(): void {
    this.getLogoPath();
  }

  getLogoPath(): void {
    this.logoPath = LOGO_PATH;
  }

}
