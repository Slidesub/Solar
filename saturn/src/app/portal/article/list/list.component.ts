import { Component, OnInit } from '@angular/core';
import { Article } from '../article.modle';
import { NzNotificationService } from 'ng-zorro-antd';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  allChecked = false;
  disabledButton = true;
  checkedNumber = 0;
  displayArticles: Array<Article> = [];
  operating = false;
  articles: Array<Article>;
  indeterminate = false;

  pageIndex = 1;
  pageSize = 10;
  total = 1;

  constructor(private articleService: ArticleService,
    private notification: NzNotificationService) { }

  ngOnInit() {
    this.searchData();
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.articleService.list(this.pageSize, this.pageIndex, '').subscribe(resp => {
      if (resp.status === 200 && resp.msg === 'success') {
        this.articles = resp.data.articles;
        this.total = 1;
      } else {
        this.articles = [];
      }
      // this.refreshStatus();
    }, error => {
      this.notification.blank('warn!', error, { nzDuration: 0 });
    });
  }

  refreshStatus(): void {
    const allChecked = this.displayArticles.every(value => value.checked === true);
    const allUnChecked = this.displayArticles.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.articles.some(value => value.checked);
    this.checkedNumber = this.articles.filter(value => value.checked).length;
  }

  currentPageDataChange($event: Array<Article>): void {
    this.displayArticles = $event;
  }

  checkAll(value: boolean): void {
    this.displayArticles.forEach(data => data.checked = value);
    this.refreshStatus();
  }
}
