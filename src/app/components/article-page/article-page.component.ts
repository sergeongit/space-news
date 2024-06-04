import {Component, OnInit} from '@angular/core';
import {ArticleInterface} from "../../interfaces/article.interface";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatIconModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  article!: ArticleInterface

  ngOnInit(): void {
    const state = history.state
    this.article = state.article
  }
}
