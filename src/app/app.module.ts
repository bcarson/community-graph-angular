/*
*   Modules imported from Angular and Apollo:
*   (installed via 'npm install', 
*   all available packages listed in src/package.json)
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdChipsModule, MdIconModule, MdInputModule, MdListModule, MdProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

/*
*   Components defined in this Module:
*/
import { AppComponent } from './app.component';
import { GqlService } from './services/services';
import { FilterPipe, OrderByPipe, SubstringPipe, } from './shared/shared';
import { 
  DashboardComponent, 
  ResultsListComponent, 
  ResultsDetailComponent, 
  SearchComponent 
} from './components/components';

/* 
*   Define GraphQL endpoint 
*   This will be returned below in provideClient()
*   and consumed in imports: ApolloModule.forRoot()
*   We can define this here because we're only 
*   using one endpoint. For a larger app w/multiple
*   endpoints, we would probably move this to the service.
*/
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://graphql.communitygraph.org/graphql/',
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  /*
  *   Declarations should contain any components 
  *   you've defined in this module (these components
  *   must also be imported at the top of this file).
  */
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
  /*
  *   Imports should contain any modules you've
  *   imported above which are defined elsewhere.
  */
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
  /*
  *   Providers should contain any services which
  *   you will be injecting into components (either 
  *   declared in this module or imported from elsewhere)
  */
  providers: [ GqlService ], 
  /*
  *   There generally should only be one component listed in
  *   bootstrap - this is the 'root' component found in your 
  *   main 'index.html' file.
  */
  bootstrap: [ AppComponent ] 
})
export class AppModule { }

/* Sam was here */