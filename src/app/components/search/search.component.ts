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
