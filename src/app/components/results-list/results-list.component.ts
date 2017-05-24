import { Component, Input, OnChanges } from '@angular/core';
import { FilterPipe, SubstringPipe } from '../../shared/shared';

@Component({
  selector: 'results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})

export class ResultsListComponent implements OnChanges {
  /* 
  *   Inputs are passed in as attributes in the .html file 
  *   where this component is called (see dashboard.component.html)
  */
  @Input() list: any;
  @Input() selectedLanguage: String;
  @Input() searchString: String;
  filteredList: Array<any>;

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
  ngOnChanges(changes){
      this.filteredList = this.list;
      if(this.selectedLanguage){
        this.filteredList = this.filterPipe.transform(this.filteredList, this.selectedLanguage);
      }
      if(this.searchString){
        this.filteredList = this.substringPipe.transform(this.filteredList, this.searchString);
      }
  }
}
