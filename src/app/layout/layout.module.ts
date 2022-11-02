import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { HeaderComponent } from './header/header.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageLoaderComponent, HeaderComponent, SearchBarComponent],
  imports: [CommonModule, LoadingBarRouterModule, ReactiveFormsModule],
  exports: [PageLoaderComponent, HeaderComponent],
})
export class LayoutModule {}
