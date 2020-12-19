import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { UserService } from '../core/services/user.service';
import { Expenditure } from '../shared/models/expenditure';
import { Income } from '../shared/models/income';
import { UserDetailResponseModel } from '../shared/models/UserDetailResponseModel';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user : User;
  userId : number;

  //pagination
  page = 1;
  pageSize = 4;
  IncomesLen : number;
  ExpsLen : number;
  pagedIncomes : Income[];
  pagedExps : Expenditure[];

  constructor(private userService : UserService, private route : ActivatedRoute) { }

  ngOnInit(): void {  
    
    this.route.paramMap.subscribe(p => {
      this.userId = +p.get('id');
      this.userService.getOneUsers(this.userId).subscribe(s =>{
        this.user = s;
        console.log(this.ExpsLen);
        console.log(this.user);
        
   
      });
    });
   
  }

  /* Pagination building */
  refreshIncomes() {
    this.pagedIncomes = this.user.incomes
      .map((income, i) => ({id: i + 1, ...income}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  refreshExps() {
    this.pagedExps = this.user.expenditures
      .map((expenditure, i) => ({id: i + 1, ...expenditure}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
