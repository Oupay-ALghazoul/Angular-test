import { HttpRequestService } from './../../../../core/service/http-request.service';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, shareReplay, tap, map } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { SearchService } from 'src/app/core/service/search.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  filteredUsers$: Observable<User[]>;

  currentPage: number = 1;
  isLoading: boolean = false;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;

  cardsDisplay: 'scroll-h-list' | 'h-list' | 'v-list';

  constructor(
    private httpRequestService: HttpRequestService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.cardsDisplay = 'scroll-h-list';
    this.getUsers(this.currentPage);
    this.searchService.getSearchTerm().subscribe((val) => {
      if (val === '') {
        this.filteredUsers$ = this.users$;
      } else
        this.filteredUsers$ = this.users$.pipe(
          map((users) => users.filter((user) => user.id === +val))
        );
    });
  }

  getUsers(page: number): void {
    this.isLoading = true;
    this.filteredUsers$ = this.users$ = this.httpRequestService
      .getUsers({ page })
      .pipe(
        tap((res) => {
          this.isLoading = false;
          this.itemsPerPage = res.per_page;
          this.totalItems = res.total;
          this.totalPages = res.total_pages;
        }),
        map((res) => res.data),
        catchError(() => {
          this.isLoading = false;
          return of([]);
        }),
        shareReplay()
      );
  }

  pageChanged(event: { page: number; itemsPerPage: number }) {
    this.getUsers(event.page);
  }

  setCardsDisplay(type: 'scroll-h-list' | 'h-list' | 'v-list'): void {
    this.cardsDisplay = type;
  }
}
