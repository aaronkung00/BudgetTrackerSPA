import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user : User ;
  userId : number;
   
  constructor(private userService : UserService, private route : ActivatedRoute) { }

    ngOnInit(): void {  
       
      this.route.paramMap.subscribe(p => {
        this.userId = +p.get('id');
        this.userService.getOneUsers(this.userId).subscribe(
          s =>{
            this.user = s;
            console.log(this.user.Expenditures);
          },
          (err:any) => console.error(err)
        );
      });
   

  }



}
