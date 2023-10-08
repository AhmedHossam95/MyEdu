import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubscriptionPageRoutingModule } from './subscription-routing.module';
import { SubscriptionPage } from './subscription.page';
import { CoreModule } from '../core/core.module';
import { UserSubscriptionFormComponent } from './components/user-subscription-form/user-subscription-form.component';
import { SummmaryComponent } from './components/summmary/summmary.component';
import { ChildDateControlComponent } from './components/child-date-control/child-date-control.component';
import { GenderControlComponent } from './components/gender-control/gender-control.component';
import { SubscriptionFooterComponent } from './components/subscription-footer/subscription-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionPageRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [SubscriptionPage, UserSubscriptionFormComponent, SummmaryComponent, ChildDateControlComponent, GenderControlComponent, SubscriptionFooterComponent]
})
export class SubscriptionPageModule { }
