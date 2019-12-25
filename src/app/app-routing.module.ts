import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  { path: '', redirectTo: '/main-page', pathMatch: 'prefix' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
