import { Component, Input, OnChanges } from '@angular/core';
import { FilterPipe, SubstringPipe } from '../../shared/shared';

@Component({
  selector: 'results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnChanges {
  @Input() list: any;
  @Input() filters: any;
  filteredList: Array<any>;
  constructor(private filterPipe: FilterPipe, private substringPipe: SubstringPipe) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(this.filters){
      if(this.filters.language){
        this.filteredList = this.filterPipe.transform(this.list, this.filters.language);
      }
      if(this.filters.search){
        this.filteredList = this.substringPipe.transform(this.list, this.filters.search);
      }
    } else {
      this.filteredList = this.list;
    }
  }

}
