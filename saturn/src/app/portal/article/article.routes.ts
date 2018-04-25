import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const ArticleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    canActivate: [],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'create', component: EditComponent },
      { path: 'edit', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ArticleRoutes) ],
  exports: [ RouterModule ]
})

export class ArticleRoutesModule { }
