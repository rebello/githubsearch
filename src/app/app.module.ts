import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileDetailComponent } from './pages/profile-detail/profile-detail.component';
import { ProfileItemsComponent } from './components/profile-items/profile-items.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProfileDetailComponent,
    ProfileItemsComponent,
    SearchPageComponent,
    HistoryPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
