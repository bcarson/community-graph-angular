/*
*   This component is small but sophisticated!
*   Here we provide user inputs, listen for changes,
*   and emit Events which are listened for in the
*   Dashboard Component. Cool stuff! 
*
*   Note our @Output() variables (searchString and language).
*   When this component notices input from the user, all it
*   does is call .emit() on one of those Output variables 
*   (defined below as EventEmitter). This will immediately
*   notify any other components listening for these changes
*   (in this app it would be our Dashboard Component).
*
*   Also note that both Inputs and Outputs must be 
*   included in the HTML file (see dashboard.component.html).
*   Learn more about EventEmitters here:
*   https://angular.io/docs/ts/latest/api/core/index/EventEmitter-class.html
*/
import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  @Input() languages;
  @Input() selectedLanguage;
  search: string;
  @Output() searchString = new EventEmitter<String>()
  @Output() language = new EventEmitter<String>();

  constructor() { }

  ngOnInit() { }

  selectLanguage(name){
    this.language.emit(name);
  }

  runSearch(){
    this.searchString.emit(this.search);
  }
}
