import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/core/services/expense.service';
import { Expenditure } from 'src/app/shared/models/expenditure';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {


  updateExp : Expenditure = {
    userId : 0,
    amount : 0,
    description: '',
    expDate: '',
    remarks:''
  };

  constructor(private expService : ExpenseService) { }

  ngOnInit(): void {
  }


  UpdateExp(){
    console.log((this.updateExp))
    this.expService.updateExpense(this.updateExp).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err:any) =>{
        console.log(err);
      }
    );
}
}
