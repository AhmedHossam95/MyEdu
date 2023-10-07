import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerComponent } from './components/divider/divider.component';
import { FormControlComponent } from './components/form-control/form-control.component';



@NgModule({
  declarations: [NavbarComponent, DividerComponent, FormControlComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent, DividerComponent, FormControlComponent],
})
export class CoreModule { }
