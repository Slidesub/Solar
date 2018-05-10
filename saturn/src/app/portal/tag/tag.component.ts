import { Component, OnInit } from '@angular/core';
import { NzNotificationService, NzModalService, NzMessageService } from 'ng-zorro-antd';
import { TagModel } from './tag.model';
import { TagService } from './tag.service';
import { EditComponent } from './edit/edit.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {

  allChecked = false;
  disabledButton = true;
  displayTags: Array<TagModel> = [];
  operating = false;
  tags: Array<TagModel>;
  indeterminate = false;

  pageIndex = 1;
  pageSize = 10;
  total = 1;

  constructor(private tagService: TagService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private nzModalService: NzModalService) { }

  ngOnInit() {
    this.searchData();
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.tagService.list(this.pageSize, this.pageIndex, '').subscribe(resp => {
      if (resp.status === 200 && resp.msg === 'success') {
        this.tags = resp.data.tags;
        this.total = resp.data.count;
      } else {
        this.tags = [];
      }
    }, error => {
      this.notification.blank('error', error, { nzDuration: 0 });
    });
  }

  refreshStatus(): void {
    const allChecked = this.displayTags.every(value => value.checked === true);
    const allUnChecked = this.displayTags.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.tags.some(value => value.checked);
  }

  currentPageDataChange($event: Array<TagModel>): void {
    this.displayTags = $event;
  }

  checkAll(value: boolean): void {
    this.displayTags.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  add() {
    this.openPopover();
  }

  edit(tagInfo) {
    this.openPopover(tagInfo);
  }

  delete(isBatchDelete, tagId?) {
    let tagIds;
    if (isBatchDelete) {
      const checkedTags = this.displayTags.filter(value => value.checked).map(value => value._id);
      tagIds = checkedTags.toString();
    } else {
      tagIds = tagId;
    }
    this.tagService.delete(tagIds).subscribe(
      resp => {
        if (resp.msg === 'success') {
          this.msg.success(resp.msg);
          this.pageIndex = 1;
          this.searchData();
        } else {
          this.msg.error(resp.msg);
        }
      }, error => this.notification.blank('error', error, { nzDuration: 0 })
    );
  }

  openPopover(tagInfo?) {
    const modal = this.nzModalService.create({
      nzTitle: 'Tag',
      nzContent: EditComponent,
      nzComponentParams: {
        tagInfo
      },
      nzMask: true,
      nzMaskClosable: false,
      nzFooter: null
    });
    modal.afterClose.subscribe(result => {
      _.isObject(result) && this.addTag(result.tag, result.isEdit);
    });
  }

  addTag(tagInfo, isEdit) {
    if (isEdit) {
      this.tagService.update(tagInfo, tagInfo._id).subscribe(
        resp => {
          if (resp.msg === 'success') {
            this.msg.success(resp.msg);
            this.pageIndex = 1;
            this.searchData();
          } else {
            this.msg.error(resp.msg);
          }
        }, error => this.notification.blank('error', error, { nzDuration: 0 })
      );
      return;
    }

    this.tagService.add(tagInfo).subscribe(
      resp => {
        if (resp.msg === 'success') {
          this.msg.success(resp.msg);
          this.pageIndex = 1;
          this.searchData();
          this.refreshStatus();
        } else {
          this.msg.error(resp.msg);
        }
      }, error => this.notification.blank('error', error, { nzDuration: 0 })
    );
  }

}
