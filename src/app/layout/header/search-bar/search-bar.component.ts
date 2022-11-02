import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/core/service/search.service';
import { Location } from '@angular/common';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  term = new FormControl('');

  constructor(
    private searchService: SearchService,
    private location: Location,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (this.location.path() === '/user' || this.location.path() === '')
        this.term.enable();
      else this.term.disable();
    });
  }

  ngOnInit(): void {
    this.term.valueChanges.subscribe((val: any) =>
      this.searchService.setSearchTerm(val)
    );
  }
}
