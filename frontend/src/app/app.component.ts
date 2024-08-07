import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {BoardsListComponent} from "./components/boards-list/boards-list.component";

import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, BoardsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mondaycom-fetcher-angular';
}
