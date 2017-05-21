import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() languages;
  @Output() selected: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    console.log(this.languages);
  }

  selectLanguage($event, name){
    console.log(name);
    if(this.languages[name]){
      //this.languages[name].selected = true;
    }
    this.selected.emit(name);
  }

}
