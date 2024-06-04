import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatIconModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
