import {Component, inject, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {ArticleInterface} from "../../interfaces/article.interface";
import {DatePipe, SlicePipe} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {Router, RouterModule} from "@angular/router";
import {FilterComponent} from "../filter/filter.component";


@Component({
  selector: 'app-article-tiles',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatDividerModule, MatIconModule, SlicePipe, DatePipe, FilterComponent],
  templateUrl: './article-tiles.component.html',
  styleUrl: './article-tiles.component.scss'
})
export class ArticleTilesComponent {
  private router = inject(Router)
  filteredArticles?: ArticleInterface[]

  @Input() defaultArticles!: ArticleInterface[]

  navigateToArticle(article: ArticleInterface): void {
    this.router.navigate(['/articles', article.id], {state: {article: article}})
  }

  filteredArticlesByKeyword(e: ArticleInterface[]): ArticleInterface[] {
    return this.filteredArticles = e
  }
}
