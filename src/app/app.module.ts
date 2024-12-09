import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { CvDetailComponent } from './components/cv-detail/cv-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    CvListComponent,
    CvFormComponent,
    CvDetailComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    ToastrModule.forRoot({ // Import ToastrModule with configuration
      timeOut: 3000, // duration of toastr notifications
      positionClass: 'toast-top-right', // position of the toast notifications
      preventDuplicates: true, // prevent duplicate toasts
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
