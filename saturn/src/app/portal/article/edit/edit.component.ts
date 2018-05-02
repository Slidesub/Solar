import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleModel } from '../article.modle';
import { ArticleService } from '../article.service';
import { TagModel } from '../../tag/tag.model';
import { UploadFile, NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { UploadModel } from '../../../component/uploader/upload.model';
import { isEmpty } from '../../../common/util';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  articleFrom: FormGroup;
  articleModel: ArticleModel = new ArticleModel();
  icons: UploadModel[];
  tags: TagModel[];
  selectedTags: string[];

  constructor(private formBuilder: FormBuilder,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id'];
    if (!isEmpty(id)) {
      this.articleService.get(id).subscribe(resp => {
          if (resp.msg === 'success') {
            this.articleModel = resp.data.article;
            this.buildForm();
          }
        }, error => {
          this.notification.blank('Error!', error, { nzDuration: 0 });
      });
    }
    this.buildForm();
  }

  buildForm() {
    this.articleFrom = this.formBuilder.group({
      title: [
        this.articleModel.title, [ Validators.required ]
      ],
      desc: [
        this.articleModel.desc, [ Validators.required ]
      ],
      body: [
        this.articleModel.body, [ Validators.required ]
      ],
    });
    this.icons = this.articleModel.icon || [];
    this.tags = this.articleModel.tags || [];
  }

  submitForm() {
    // this.articleFrom.value.icons = this.icons;
    this.articleFrom.value.tags = this.selectedTags;
    if (isEmpty(this.articleModel._id)) {
      this.articleService.add(this.articleFrom.value).subscribe(resp => {
        this.msg.info(resp.msg);
        if (resp.msg === 'success') {
          this.router.navigateByUrl('/article/list');
        }
        }, error => {
          this.msg.error('failed');
        }
      );
    } else {
      this.articleService.update(this.articleFrom.value, this.articleModel._id).subscribe(resp => {
        this.msg.info(resp.msg);
        if (resp.msg === 'success') {
          this.router.navigateByUrl('/article/list');
        }
        }, error => {
          this.msg.error('failed');
        }
      );
    }
  }

  preview() {
    this.msg.info('preview');
  }
}
