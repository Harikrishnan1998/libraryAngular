import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {BookModel} from '../books/BookModel';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title:String = "Add Book";

  constructor(private booksService:BooksService,private router:Router) { }
  bookItem=new BookModel(null,null,null,null);

  ngOnInit() {}
  AddBook(){
    this.booksService.newBook(this.bookItem);
    console.log('called');
    alert('success');
    this.router.navigate(['/books']);
  }

}
