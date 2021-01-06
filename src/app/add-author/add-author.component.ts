import { Component, OnInit } from '@angular/core';
import {AuthorModel} from '../authors/AuthorModel';
import {AuthorsService} from '../authors.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  title:String = "Add Author";
  constructor(private authorsService:AuthorsService,private router:Router) { }
  authorItem=new AuthorModel(null,null,null);

  ngOnInit(){}
  AddAuthor(){
    this.authorsService.newAuthor(this.authorItem);
    console.log('called');
    alert('success');
    this.router.navigate(['/authors']);
  }

}
