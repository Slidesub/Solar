import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleModel } from '../article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.less']
})
export class AddArticleComponent implements OnInit {

  title: string;
  articleFrom: FormGroup;
  articleModel: ArticleModel;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.title = '新增文章';
    this.articleModel = new ArticleModel();
    this.articleModel.title = '文章1';
    this.articleModel.desc = '';
    this.buildForm();
  }

  buildForm() {
    this.articleFrom = this._formBuilder.group({
      title: [
        this.articleModel.title, [ Validators.required, Validators.email ]
      ],
      desc: [
        this.articleModel.desc, [ Validators.required ]
      ]
    });
  }

  getFormControl(name) {
    return this.articleFrom.controls[name];
  }
  submitForm() {
    for (const key in this.articleFrom.controls) {
      if (this.articleFrom.controls.hasOwnProperty(key)) {
        this.articleFrom.controls[key].markAsDirty();
      }
    }
    console.log(this.articleFrom.value);
  }

}
