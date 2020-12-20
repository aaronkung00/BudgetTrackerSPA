import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/core/services/expense.service';

@Component({
  selector: 'app-rm-expense',
  templateUrl: './rm-expense.component.html',
  styleUrls: ['./rm-expense.component.css']
})
export class RmExpenseComponent implements OnInit {

  exp_id : number;

  constructor(private expService : ExpenseService) { }

  ngOnInit(): void {
  }

  RemoveExp(){
    console.log(this.exp_id );
    this.expService.deleteExpense(this.exp_id).subscribe(
      (response) => {
        console.log(response);
      },
      (err:any) => {
        console.log(err);
      }
    );

  }
}
