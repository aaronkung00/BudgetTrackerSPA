import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { UserService } from '../core/services/user.service';
import { Expenditure } from '../shared/models/expenditure';
import { Income } from '../shared/models/income';
import { User } from '../shared/models/user';
import { UserDetailResponseModel } from '../shared/models/UserDetailResponseModel';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user : User = {
    email: '',
    fullName: '',
    joinedOn : '',
    password: '',
    Incomes: [] as any[],
    Expenditures: [] as any[]
  };
  userId : number;

   

  constructor(private userService : UserService, private route : ActivatedRoute) { }

    ngOnInit(): void {  

      this.route.paramMap.subscribe(p => {
        this.userId = +p.get('id');
        this.userService.getOneUsers(this.userId).subscribe(s =>{
          this.user = s;

          console.log(this.user);
        });
    });
  }
}
