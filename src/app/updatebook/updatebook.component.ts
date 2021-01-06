import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  bookItem= {
    name :'',
    author:'',
    genre:'',
    imageUrl:''}

  constructor(private router:Router,private booksService:BooksService) { }

  ngOnInit(): void {
    let id = localStorage.getItem("editProductname");
    this.booksService.getBook(id).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }

  editBook()
  {    
    this.booksService.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['/books']);
  }

}
