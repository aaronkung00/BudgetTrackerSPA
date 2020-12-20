import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-rm-user',
  templateUrl: './rm-user.component.html',
  styleUrls: ['./rm-user.component.css']
})
export class RmUserComponent implements OnInit {

  user_id : number;

  constructor(private userService : UserService) { }

  ngOnInit(): void {

  }


  RemoveUser(){
    console.log(this.user_id);
    this.userService.deleteUser(this.user_id).subscribe(
      (response) => {
        console.log(response);
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

}
