import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BaseButtonComponent } from '../common/base-button/base-button.component';
import { MaterialModule } from '../common/material/material.module';
import { MissionComponent } from './mission/mission.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    LandingPageComponent,
    NavBarComponent,
    BaseButtonComponent,
    MissionComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule,
  ]
})
export class WebsiteModule { }
