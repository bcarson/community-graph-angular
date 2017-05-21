import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  @Input() list: any;
  @Input() filters: any;
  constructor() { }

  ngOnInit() {
  }

}
