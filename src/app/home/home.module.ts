import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { HomePage } from './home.page';
//import { HomeResolver } from '../home/home.resolver';
import { HomeService } from '../home/home.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        //resolve: {
        //  data: HomeResolver
        //}
      }
    ])
  ],
  declarations: [ HomePage ],
  providers: [
    //HomeResolver,
    HomeService
  ]
})
export class HomePageModule {}
