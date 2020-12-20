import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/core/services/income.service';

@Component({
  selector: 'app-rm-income',
  templateUrl: './rm-income.component.html',
  styleUrls: ['./rm-income.component.css']
})
export class RmIncomeComponent implements OnInit {

  income_id : number;

  constructor(private incomeService : IncomeService) { }

  ngOnInit(): void {
  }

  RemoveIncome(){
    console.log(this.income_id);
    this.incomeService.deleteUser(this.income_id).subscribe(
      (response) => {
        console.log(response);
      },
      (err:any) => {
        console.log(err);
      }
    );

  }
}
