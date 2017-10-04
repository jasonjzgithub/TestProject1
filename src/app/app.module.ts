import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MyInterestsComponent } from './components/my-interests/my-interests.component';
import { WatsonContentHubComponent } from './components/watson-content-hub/watson-content-hub.component';
import { UserInputComponent } from './components/user-input/user-input/user-input.component';
import { InjectConsumerComponent } from './components/inject-consumer/inject-consumer.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyInterestsComponent,
    WatsonContentHubComponent,
    UserInputComponent,
    InjectConsumerComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
      {path: 'myInterests',
       component: MyInterestsComponent } 
    ])
  ],
  exports: [ContainerComponent, MyInterestsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule_TestProject1 { }
