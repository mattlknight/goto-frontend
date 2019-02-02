import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { KeywordService, KeywordDetailResolverService, MessageService } from './services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { KeywordDetailComponent } from './keyword-detail/keyword-detail.component';
import { KeywordEditComponent } from './keyword-edit/keyword-edit.component';
import { KeywordSubmitComponent } from './keyword-submit/keyword-submit.component';

// Add an icon to the library for convenient access in other components
library.add(faEdit);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KeywordsComponent,
    KeywordDetailComponent,
    MessagesComponent,
    KeywordEditComponent,
    KeywordSubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    // NgbModule,
    AppRoutingModule
  ],
  providers: [
    KeywordService,
    KeywordDetailResolverService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
