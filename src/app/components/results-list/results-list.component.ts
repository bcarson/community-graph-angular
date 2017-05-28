import { Component, Input, OnInit } from '@angular/core';
import { FilterPipe, SubstringPipe } from '../../shared/shared';
import { Observable } from "rxjs";

@Component({
  selector: 'results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})

export class ResultsListComponent implements OnInit {
  /*
  *   Inputs are passed in as attributes in the .html file
  *   where this component is called (see dashboard.component.html)
  */
  @Input() repositoryList$: Observable<Array<any>>;
  @Input() selectedLanguage: String;
  @Input() searchString: String;
  filteredRepositoryList$: Observable<Array<any>>;

  constructor(
    /* See note about Dependency Injection in dashboard.component.ts */
    private filterPipe: FilterPipe,
    private substringPipe: SubstringPipe
  ) { }

  /*
  *   ngOnChanges is another Angular Lifecycle hook.
  *   Here we're listening for either of these @Input()
  *   values to change, then filtering the data again
  *   based on the new values.
  */
  ngOnInit() {
    this.filteredRepositoryList$ = this.repositoryList$.map((repositoryList) => {
      if (this.selectedLanguage) {
        repositoryList = this.filterPipe.transform(repositoryList, this.selectedLanguage);
      }
      if (this.searchString) {
        repositoryList = this.substringPipe.transform(repositoryList, this.searchString);
      }
      return repositoryList;
    });
  }
}
