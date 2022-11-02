import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from 'src/app/core/service/http-request.service';
import { User } from 'src/app/core/models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User;
  isLoading: boolean = false;

  constructor(
    private httpRequestService: HttpRequestService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.getUser(userId);
  }

  getUser(id: number): void {
    this.isLoading = true;
    this.httpRequestService.getUser(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.user = res;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  back(): void {
    this.location.back();
  }
}
