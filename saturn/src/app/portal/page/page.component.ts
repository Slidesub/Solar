import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  model: string;
  allChecked = false;
  disabledButton = true;
  displayData: Array<any> = [];
  operating = false;
  data: Array<any>;
  indeterminate = false;

  pageIndex = 1;
  pageSize = 10;
  total = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const url = location.pathname;
    if ('/action' === location.pathname) {
      this.model = 'Action';
    } else if ('/tag' === location.pathname) {
      this.model = 'Tag';
    } else {
      this.router.navigate(['login']);
    }
  }

}
