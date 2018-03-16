import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleModel } from '../article.model';
import { Tag } from '../../tag/tag.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.less']
})
export class AddArticleComponent implements OnInit {

  title: string;
  articleFrom: FormGroup;
  articleModel: ArticleModel;
  tags: Tag[];
  selectedTags: number[];

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

  buildForm() {
    this.articleFrom = this._formBuilder.group({
      title: [
        this.articleModel.title, [ Validators.required ]
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
    this._articleService.addArticle(this.articleFrom.value).subscribe(response => {
      console.log(response);
    });
  }

}
