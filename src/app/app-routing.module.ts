import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfileDetailComponent } from './pages/profile-detail/profile-detail.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: DashboardComponent },
    { path: 'search', component: SearchPageComponent},
    { path: 'profile', component: ProfileDetailComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
