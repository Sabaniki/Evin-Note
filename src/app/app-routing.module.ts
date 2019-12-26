import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AddLectureComponent} from './add-lecture/add-lecture.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'add-lecture', component: AddLectureComponent},
  {path: '', redirectTo: '/main-page', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
