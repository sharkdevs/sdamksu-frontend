import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MissionComponent } from './mission/mission.component';
import { DevotionalResourceComponent } from './devotional-resource/devotional-resource.component';
import { HttpClientModule } from '@angular/common/http';
import { DevotionalService } from './services/devotional.service';
import { SharedModule } from '../shared/shared.module';
import { EvangelismComponent } from './evangelism/evangelism.component';
import { FindOutComponent } from './find-out/find-out.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    EvangelismComponent,
    FindOutComponent,
    LandingPageComponent,
    NavBarComponent,    
    FooterComponent,
    MissionComponent,
    DevotionalResourceComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[DevotionalService]
})
export class WebsiteModule { }
