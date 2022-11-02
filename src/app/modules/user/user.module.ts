import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    LoadingBarHttpClientModule,
    PaginationModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
