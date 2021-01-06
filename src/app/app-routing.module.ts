import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard'
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = 
                      [
                          {path:'login',component:LoginComponent},
                          {path:'',component:LoginComponent},
                          {path:'adda',canActivate:[AuthGuard],component:AddAuthorComponent},
                          {path:'addb',component:AddBookComponent},
                          {path:'books',component:BooksComponent},
                          {path:'authors',component:AuthorsComponent},
                          {path:'updateb',component:UpdatebookComponent},
                          {path:'updatea',component:UpdateauthorComponent},
                          {path:'signup',component:SignupComponent}
                        
                      ];
                      
                      
                      
                  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
