import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdChipsModule, MdIconModule, MdInputModule, MdListModule, MdProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { 
  DashboardComponent, 
  ResultsListComponent, 
  ResultsDetailComponent, 
  SearchComponent 
} from './components/components';

import { GqlService } from './services/services';

import { FilterPipe, OrderByPipe, SubstringPipe, } from './shared/shared';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://graphql.communitygraph.org/graphql/',
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterPipe, 
    OrderByPipe, 
    SubstringPipe,
    ResultsListComponent,
    ResultsDetailComponent,
    SearchComponent
  ],
  imports: [
    ApolloModule.forRoot(provideClient),
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MdChipsModule,
    MdIconModule,
    MdInputModule, 
    MdListModule, 
    MdProgressSpinnerModule
  ],
  providers: [GqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Sam was here */