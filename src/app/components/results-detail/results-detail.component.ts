import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-detail',
  templateUrl: './results-detail.component.html',
  styleUrls: ['./results-detail.component.scss']
})
export class ResultsDetailComponent implements OnInit {
  @Input() item: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
