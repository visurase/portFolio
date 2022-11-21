import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperinceComponent } from './work-experince/work-experince.component';
import { TrainingAndCetificateComponent } from './work-experince/training-and-cetificate/training-and-cetificate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './featureModule/material.module';
import { CommonComponent } from './common/common.component';
import { IntroductionModule } from './introduction/introduction.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SkillsComponent,
    WorkExperinceComponent,
    TrainingAndCetificateComponent,
    CommonComponent,
    
  ],
  imports: [
   
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    IntroductionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
