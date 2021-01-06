import { Component, OnInit } from '@angular/core';
import {BookModel} from '../books/BookModel';
import {BooksService} from '../books.service';
import { Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title: String = "Books";

  books: BookModel[] = [];

  imageWidth: number = 50;
  imageMargin:number = 2;

  constructor(private router:Router,private booksService:BooksService,public _auth:AuthService) { }

  ngOnInit(): void {

    this.booksService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  editBook(book:any)
  {
    localStorage.setItem("editProductname", book._id.toString());
    this.router.navigate(['updateb']);

  }
  deleteBook(book:any)
  {
    this.booksService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })

}
}
