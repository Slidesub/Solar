import { Component, OnInit } from '@angular/core';
import { UserModel, UserPage } from './user.model';
import { UserService } from './user.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { _ } from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})

export class UserComponent implements OnInit {

  // 源数据
  users: UserModel[] = [];
  usersCache =  {};
  index: number = 0;
  // 分页
  userPage: UserPage = new UserPage();
  pageIndex: number = 1;
  pageSize: number = 10;
  search: string = '';
  // 加载
  loading: boolean = true;
  // 搜索
  sortValue: any = '';
  sortKey: any = '';

  constructor(private userService: UserService, private notification: NzNotificationService) { }

  ngOnInit() {
    this.searchData();
    this.updateUsersCache();
  }

  addUser() {
    this.index ++;
    let user = new UserModel(
      'id-' + this.index,
      'name-' + this.index,
      'mobile-' + this.index,
      'email-' + this.index,
      'password-' + this.index,
      new Date(),
      new Date(),
      'by',
      'by');
    this.users = [...this.users, user];
    this.updateUsersCache();
  }

  updateUsersCache(): void {
    this.users.forEach(user => {
      if (!this.usersCache[user.id]) {
        this.usersCache[user.id] = {
          edit: false,
          user: _.cloneDeep(user)
        };
      }
    });
  }


  sort($event): void {
    this.sortKey = $event.key;
    this.sortValue = $event.value;
    // this.searchData();
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.userService.list(this.pageIndex, this.pageSize, this.search)
      .subscribe(response => {
        this.userPage = response;
        this.users = response.users;
        this.loading = false;
    }, error => {
      this.loading = false;
      this.notification.blank('错误!', '加载用户列表数据失败', { nzDuration: 0 });
    });
  }

  edit($id: string ): void {
    this.usersCache[$id].edit = true;
  }

  cancel($id: string): void {
    this.usersCache[$id].edit = false;
    this.usersCache[$id].user =  _.cloneDeep(this.users.find(item => item.id === $id));
  }

  save($id: string): void {
    this.usersCache[$id].edit = false;
    const i = this.users.findIndex(item => item.id === $id);
    this.users[i] = _.cloneDeep(this.usersCache[$id].user);
    this.userService.add(this.users[i]).subscribe(response => {
      console.log(response);
    }, error => {
      this.notification.blank('错误!', '保存用户数据失败', { nzDuration: 0 });
    });
  }

  delete($id: string): void {
    this.users = this.users.filter(user => user.id !== $id);
  }

}
