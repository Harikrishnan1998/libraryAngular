import { Injectable } from '@angular/core';
import {AuthorModel} from './authors/AuthorModel';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  item={
    name:'',
    genre:'',
    imageUrl:''

  }


  constructor(private http:HttpClient) { }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/authors/"+id);
  }

  getAuthors(){
    return this.http.get("http://localhost:3000/authors")
  }
  newAuthor(item: AuthorModel){
    return this.http.post("http://localhost:3000/inserta",{"author":item})
    .subscribe(data=>{console.log(data)})
   }
   deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/authors/"+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updatea",author)
    .subscribe(data =>{console.log(data)})
  }
}
