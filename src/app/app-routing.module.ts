import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { CvDetailComponent } from './components/cv-detail/cv-detail.component';
const routes: Routes = [
  { path: '', redirectTo: 'cv-list', pathMatch: 'full' },
  { path: 'cv-list', component: CvListComponent },
  { path: 'cv-form', component: CvFormComponent },
  { path: 'cv-form/:id', component: CvFormComponent },
  { path: 'cv-detail/:id', component: CvDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
