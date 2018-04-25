import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

const PortalRoutes: Routes = [
  {
    path: '',
    component: PortalComponent,
    canActivate: [],
    children: [
      { path: '', redirectTo: 'guidance', pathMatch: 'full' },
      { path: 'guidance', loadChildren: './guidance/guidance.module#GuidanceModule' },
      { path: 'article', loadChildren: './article/article.module#ArticleModule' },
      { path: '**', redirectTo: 'guidance' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(PortalRoutes) ],
  exports: [ RouterModule ]
})

export class PortalRoutesModule { }
