import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookModel} from './books/BookModel';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
 
  item={
    name:'',
    author:'',
    genre:'',
    imageUrl:''

  }

  constructor(private http:HttpClient) { }

  getBook(id:any){
    return this.http.get("http://localhost:3000/books/"+id);
  }

  getBooks(){
    return this.http.get("http://localhost:3000/books")
  }
  newBook(item: BookModel){
    return this.http.post("http://localhost:3000/insertb",{"book":item})
    .subscribe(data=>{console.log(data)})
   }
   editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updateb",book)
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/books/"+id)

  }
}
