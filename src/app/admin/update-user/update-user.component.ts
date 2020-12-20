import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { addUserRequestModel } from 'src/app/shared/models/addUserRequestModel';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  update_user:  addUserRequestModel = {
    email : '',
    password: '',
    fullName: ''
  };


  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  UpdateUser(){
    console.log((this.update_user))
    this.userService.updateUser(this.update_user).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err:any) =>{
        console.log(err);
      }
    );
  }
}
