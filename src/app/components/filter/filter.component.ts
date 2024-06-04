import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, switchMap} from "rxjs";
import {ArticleInterface} from "../../interfaces/article.interface";
import {NewsDataService} from "../../services/news-data.service";


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  private dataService = inject(NewsDataService)
  filterInput: FormControl = new FormControl<string>('')

  @Output('filteredArticlesOutput') filteredArticlesOutput = new EventEmitter<ArticleInterface[]>()

  ngOnInit(): void {
    this.filterInput.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((str: string) => this.dataService.getFilteredArticlesByTitle(str))
      )
      .subscribe(
        (filteredArticles) => {
          this.onEmitFilteredArticles(filteredArticles)
        }
      )
  }

  onEmitFilteredArticles(filteredArticles: ArticleInterface[]): void {
    this.filteredArticlesOutput.emit(filteredArticles)
  }
}
