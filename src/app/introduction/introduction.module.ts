import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { IntroductionRoutingModule } from './intruduction-routing.module';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../featureModule/material.module';
import { QualifiationComponent } from './qualifiation/qualifiation.component';

@NgModule({
  declarations: [
    IntroductionComponent,  QualifiationComponent,
  ],
  imports: [
    CommonModule,IntroductionRoutingModule,
    MaterialExampleModule,
    MatSidenavModule,

  ]
,
exports: [
  MatSidenav
]
})
export class IntroductionModule { }
