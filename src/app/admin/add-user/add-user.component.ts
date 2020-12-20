import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { addUserRequestModel } from 'src/app/shared/models/addUserRequestModel';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  new_user : addUserRequestModel = {
    email : '',
    password: '',
    fullName: ''
  };



  constructor(private userService : UserService) { }

  ngOnInit(): void {

  }

  AddUser(){
    this.userService.createUser(this.new_user).subscribe(
      (response) => {
        console.log(response);
      },
      (err:any) => {
        console.log(err);
      }
    );
    console.log("addUser component is here!");
    console.log(this.new_user);
  }

}
