import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  new_user : User;

  constructor(private userService : UserService) { }

  ngOnInit(): void {

  }

  AddUser(){
    console.log("addUser component is here!");
    console.log(this.new_user.email);
    console.log(this.new_user.fullName);
    console.log(this.new_user.password);

  }

}
