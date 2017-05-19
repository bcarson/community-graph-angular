import { Component, OnInit } from '@angular/core';
import { GqlService } from '../../services/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result$: any;

  constructor(private gqlService: GqlService) { }

  ngOnInit() {
    console.log('hello from the dashboard');

    this.result$ = this.gqlService.getQuery();
    this.result$.subscribe(data => console.log(data));
  }

}
