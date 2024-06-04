import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home-page/home-page.component').then((m) => m.HomePageComponent)
  },
  {
    path: 'articles/:id',
    loadComponent: () => import('./components/article-page/article-page.component').then((m) => m.ArticlePageComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
  },
];
