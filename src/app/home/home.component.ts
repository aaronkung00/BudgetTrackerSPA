import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : User[] = [];
  //pagination
  page = 1;
  pageSize = 4;
  collectionSize : number;
  pagedUsers : User[];

  constructor(private userService : UserService) {
    
   }

  ngOnInit(): void {
     this.userService.getAllUsers().subscribe( u => {
      this.users = u;
      this.collectionSize = this.users.length;
      console.log(this.users);
      this.refreshUsers();
    }   
    );
    
  }

  refreshUsers() {
    this.pagedUsers = this.users
      .map((user, i) => ({id: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
