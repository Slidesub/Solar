import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleModel } from '../article.model';
import { Tag } from '../../tag/tag.model';
import { ArticleService } from '../article.service';
import { UploaderComponent } from '../../../component/uploader/uploader.component';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.less']
})
export class AddArticleComponent implements OnInit, AfterViewInit {

  title: string;
  articleFrom: FormGroup;
  articleModel: ArticleModel;
  tags: Tag[];
  selectedTags: number[];
  @ViewChild(UploaderComponent)
  private uploaderComponent: UploaderComponent;

  constructor(private _formBuilder: FormBuilder, private _articleService: ArticleService) {
  }

  ngOnInit() {
    this.title = '新增文章';
    this.articleModel = new ArticleModel();
    this.articleModel.title = '文章1';
    this.articleModel.desc = '';
    this.buildForm();
    this.tags = [];
    this.selectedTags = [];
    for (let i = 0; i < 10; i++) {
      let tag = new Tag();
      tag.id = i + 1;
      tag.name = 'name-' + tag.id;
      this.tags.push(tag);
    }
  }

  ngAfterViewInit() {

  }

  buildForm() {
    this.articleFrom = this._formBuilder.group({
      title: [
        this.articleModel.title, [ Validators.required ]
      ],
      desc: [
        this.articleModel.desc, [ Validators.required ]
      ],
      body: [
        this.articleModel.body, [ ]
      ],
      icon: [
        this.articleModel.icon, []
      ]

    });
  }

  getFormControl(name) {
    return this.articleFrom.controls[name];
  }

  submitForm() {
    this._articleService.addArticle(this.articleFrom.value).subscribe(response => {
      console.log(response);
    });
    
    for (const key in this.articleFrom.controls) {
      if (this.articleFrom.controls.hasOwnProperty(key)) {
        this.articleFrom.controls[key].markAsDirty();
      }
    }
    this.articleFrom.value.icon = this.uploaderComponent.icon;
    console.log(this.articleFrom.value);
  }

}
