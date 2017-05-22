import { Component, OnInit, Output } from '@angular/core';
import { GqlService } from '../../services/services';
import { Observable } from 'rxjs/observable';
import { ResultsListComponent, SearchComponent } from '../../components/components';
import { FilterPipe, OrderByPipe, SubstringPipe } from '../../shared/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ FilterPipe, OrderByPipe, SubstringPipe ]
})
export class DashboardComponent implements OnInit {
  loading: boolean = true;
  result$: Observable<any>;
  languageFilter: Array<Object>;
  languages: any;
  filters: any;
  filteredRepos: any;
  selectedLanguage: any;

  constructor(
    private gqlService: GqlService, 
    private filterPipe: FilterPipe,
    private orderByPipe: OrderByPipe) { }
  @Output() repositories: any;
  ngOnInit() {

    this.result$ = this.gqlService.getQuery();
    this.result$.subscribe(results => {
      this.repositories = results.data.Repository;
      this.createFilters();
      this.loading = false;
    });
  }

  updateLanguage(language){
    this.filters = {
      'language': language
    }
    this.selectedLanguage = language;
  }

  updateString(search){
    this.filters = { 'search': search }
  }

  createFilters(){
    this.languages = new Map();

    /*
    * Collect languages from each repo to create a filter
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
    * Convert language map to array and sort by count (descending)
    */
    this.languageFilter = this.orderByPipe.transform(Array.from(this.languages, ([key, val]) => {
      return {
        'name': key,
        'count': val
      }
    }), 'count');
  }

}
