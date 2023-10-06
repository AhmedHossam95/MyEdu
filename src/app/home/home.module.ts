import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CoreModule } from '../core/core.module';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { StepComponent } from './components/step/step.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CoreModule
  ],
  declarations: [HomePage, MainContentComponent, FooterComponent, DiscoverComponent, StepComponent, NavLinksComponent]
})
export class HomePageModule { }
