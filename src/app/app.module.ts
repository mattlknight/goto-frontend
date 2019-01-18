import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { KeywordService, MessageService } from './services/index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { KeywordDetailComponent } from './keyword-detail/keyword-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KeywordsComponent,
    KeywordDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    KeywordService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
