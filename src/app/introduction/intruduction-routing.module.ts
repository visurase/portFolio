import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from '../common/common.component';
import { IntroductionComponent } from './introduction.component';
import { QualifiationComponent } from './qualifiation/qualifiation.component';


const routes: Routes = [
    {
      path: '',
      component: IntroductionComponent,
      children: [
       
      ],
    }, {
      path: 'qualification',
      component: QualifiationComponent
    },
    { path: 'skill',
    component: IntroductionComponent,}
    
 ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntroductionRoutingModule { }
