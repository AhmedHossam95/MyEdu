import { Component, OnInit } from '@angular/core';
import { MAIN_CONTENT_IMG_PATH } from 'src/app/core/constants/imgs-paths';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent  implements OnInit {
  placeholderImgPath!:string;
  buttonLabel= 'subscribe now';
  constructor() { }

  ngOnInit() {
    this.getPlaceholderImgPath();
  }

  getPlaceholderImgPath():void {
    this.placeholderImgPath = MAIN_CONTENT_IMG_PATH;
  }
}
