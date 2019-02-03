import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeywordEditComponent } from './keyword-edit/keyword-edit.component';
import { KeywordDetailResolverService } from './services';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'edit/:keyword',
    component: KeywordEditComponent,
    resolve: {
      keyword: KeywordDetailResolverService
  }},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
