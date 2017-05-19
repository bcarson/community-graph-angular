import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { 
  DashboardComponent, 
  ResultsListComponent, 
  ResultsDetailComponent, 
  SearchComponent } from './components/components';

import { GqlService } from './services/services';

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
    ResultsListComponent,
    ResultsDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [GqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
