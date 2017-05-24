// Imports from Angular and RxJS 
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/observable';

// Imports defined within this application
import { GqlService } from '../../services/services';
import { FilterPipe, OrderByPipe, SubstringPipe } from '../../shared/shared';
import { ResultsListComponent, SearchComponent } from '../../components/components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ FilterPipe, OrderByPipe, SubstringPipe ]
})

export class DashboardComponent implements OnInit {
  @Output() repositories: any;
  filteredRepos: Array<any>;
  languageFilter: Array<Object>;
  languages: any;
  loading: boolean = true;
  /*
  *   Note: it is accepted common practice (but not required)
  *   to note variables containing Observables by putting a
  *   $ dollar sign at the end of the variable name.
  */
  result$: Observable<any>; 
  searchString: String;
  selectedLanguage: String;    

  constructor(
    /*
    *   Dependency Injection!
    *   https://angular.io/docs/ts/latest/guide/dependency-injection.html
    *   Any services/pipes used in this component must 
    *   be imported at the top of the file and also
    *   included in providers either in this component,
    *   app.component.ts or app.module.ts.
    *   Once registered as a provider, these services
    *   can be 'injected' in the constructor, then 
    *   methods defined elsewhere are available here
    *   (example: 'this.gqlService.getQuery' seen below)
    */
    private gqlService: GqlService, 
    private filterPipe: FilterPipe,
    private orderByPipe: OrderByPipe) { }

  ngOnInit() {
    /*
    *   ngOnInit is one of several convenient built-in 
    *   Angular Lifecycle hooks. Learn more here:
    *   https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
    */

    /*
    *   When this component is initialized ('onInit'),
    *   use gqlService.getQuery method which will return
    *   an Observable (similar to a promise but it will
    *   keep watching for changes and update as necessary)
    */
    this.result$ = this.gqlService.getQuery();

    /*
    *   Once your Observable is returned from the service,
    *   you'll want to .subscribe() which is similar to 
    *   promise.then, except it will fire again each time
    *   the data is updated.
    *
    *   Note we're passing in parameter 'results' which
    *   will contained data returned from our query.
    *   We can also call any methods here that depend
    *   on this data (such as createFilters seen here).
    */
    this.result$.subscribe(results => {
      this.repositories = results.data.Repository;
      this.createFilters();
      this.loading = false;
    });
  }


  /*
  *   This might look simple but it's very cool!! :)
  *   See 'dashboard.component.html - updateLanguage() and 
  *   updateString() are both listening for an event from 
  *   another component (search.component in this case)
  *   When user input is received, an Event is sent from
  *   the child and received here to let us know what changed.
  *
  *   Why do it this way? Because this allows us to listen/share
  *   and update real time data between multiple components. :)
  */
  updateLanguage(language){
    this.selectedLanguage = language;
  }

  updateString(search){
    this.searchString = search;
  }

  createFilters(){
    this.languages = new Map();

    /*
    *   Collect languages from each repo to create a filter
    */
    this.repositories.forEach(repo => {
      if(repo.language){
        if(this.languages.has(repo.language)){
          let count = this.languages.get(repo.language);
          this.languages.set(repo.language, count + 1);
        } else {
          this.languages.set(repo.language, 1);
        }
      }
    });

    /*
    *   Convert language map to array and sort by count (descending)
    *   This languageFilter array will be passed to the Search component.
    */
    this.languageFilter = this.orderByPipe.transform(Array.from(this.languages, ([key, val]) => {
      return {
        'name': key,
        'count': val
      }
    }), 'count');
  }

}
