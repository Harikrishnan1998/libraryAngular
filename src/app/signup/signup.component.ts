import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  data={
    firstname:'',
    email:'',
    password:'',
    cpassword:'',
    phone:''
  }

  ngOnInit(): void {
    
  }
  onSubmit(){}
}
