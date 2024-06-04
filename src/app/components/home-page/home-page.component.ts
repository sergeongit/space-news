import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ArticleTilesComponent} from "../article-tiles/article-tiles.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NewsDataService} from "../../services/news-data.service";
import {isEmpty} from "rxjs";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ArticleTilesComponent, MatProgressSpinnerModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  dataService = inject(NewsDataService)
  dataNewsStream = this.dataService.getArticlesDataStream
  filteredDataNewsStream = this.dataService.getFilteredArticlesByTitle()

  checkIsFiltered = this.filteredDataNewsStream
    .pipe(
      isEmpty()
    )
}
