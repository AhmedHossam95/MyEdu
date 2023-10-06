import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent, CustomBtnComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [NavbarComponent, CustomBtnComponent],
})
export class CoreModule { }
