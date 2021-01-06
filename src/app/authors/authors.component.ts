import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthorModel} from '../authors/AuthorModel';
import {AuthorsService} from '../authors.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title: String = "Authors";

  authors: AuthorModel[] = [];

  imageWidth: number = 50;
  imageMargin:number = 2;

  constructor(private router:Router,private authorsService:AuthorsService,public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorname", author._id.toString());
    this.router.navigate(['updatea']);

  }
  deleteAuthor(author:any)
  {
    this.authorsService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })

}

}
