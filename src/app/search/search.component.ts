import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText = '';
  searchTextChanged = new Subject<string>();

  @Output() search = new EventEmitter<string>();

  constructor() {
    this.searchTextChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchText) => this.search.emit(searchText));
  }

  onSearchTextChange(searchText: string) {
    this.searchTextChanged.next(searchText);
  }
}
