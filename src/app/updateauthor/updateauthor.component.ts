import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  authorItem= {
    name :'',
    genre:'',
    imageUrl:''}

  constructor(private router:Router,private authorsService:AuthorsService) { }

  ngOnInit(): void {
    let id = localStorage.getItem("editAuthorname");
    this.authorsService.getAuthor(id).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorsService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
