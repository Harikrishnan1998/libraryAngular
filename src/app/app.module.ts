import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from'@angular/forms';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { BooksService } from './books.service';
import {AuthorsService} from './authors.service';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { BookComponent } from './book/book.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorsComponent,
    LoginComponent,
    AddAuthorComponent,
    AddBookComponent,
    BooksComponent,
    UpdateauthorComponent,
    UpdatebookComponent,
    BookComponent,
    SignupComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [BooksService,AuthorsService,AuthService,AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
