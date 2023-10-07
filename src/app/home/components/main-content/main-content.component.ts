import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { MAIN_CONTENT_IMG_PATH } from 'src/app/core/constants/imgs-paths';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  placeholderImgPath!: string;
  deviceWidth!: number;
  mobileBtnWidth = 193;
  desktopBtnWidth = 220;
  mobileBtnHeight = 48;
  desktopBtnHeight = 70.4;
  minDesktopWidth = 1200;
  constructor(private readonly navCtrl: NavController) { }

  ngOnInit() {
    this.getPlaceholderImgPath();
  }

  getPlaceholderImgPath(): void {
    this.placeholderImgPath = MAIN_CONTENT_IMG_PATH;
  }

  navToSubscription(): void {
    this.navCtrl.navigateForward('subscription');
  }
}
