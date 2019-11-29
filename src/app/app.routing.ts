import {RouterModule, Routes} from '@angular/router';
import {FakeStudentDetailComponent} from './fake-student-detail/fake-student-detail.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  { path: ':recordNo',      component: FakeStudentDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
