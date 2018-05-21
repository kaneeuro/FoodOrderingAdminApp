import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PremierComponent } from './premier/premier.component';
import { DeuxiemeComponent } from './deuxieme/deuxieme.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';
import { QuatriemeComponent } from './quatrieme/quatrieme.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'deuxieme', component: DeuxiemeComponent },
  { path: 'troisieme', component: TroisiemeComponent },
  { path: 'quatrieme', component: QuatriemeComponent },
  { path: '', redirectTo: '/premier' , pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PremierComponent,
    DeuxiemeComponent,
    TroisiemeComponent,
    QuatriemeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
