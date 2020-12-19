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
  constructor(private userService : UserService) { }

  ngOnInit(): void {
     this.userService.getAllUsers().subscribe( u => {
      this.users = u;
      console.log(this.users);
    }   
    );
    
  }

}
