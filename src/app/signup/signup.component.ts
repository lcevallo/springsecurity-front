import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: any  = {};

  constructor() { }

  ngOnInit() {
  }

  saveUser(user:any){

  }
}
