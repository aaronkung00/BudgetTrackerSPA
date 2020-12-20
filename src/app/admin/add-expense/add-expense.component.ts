import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/core/services/expense.service';
import { Expenditure } from 'src/app/shared/models/expenditure';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  newExp : Expenditure = {
    userId : 0,
    amount : 0,
    description: '',
    expDate: '',
    remarks:''

  };



  constructor(private expenseService : ExpenseService) { }

  ngOnInit(): void {
  }

  AddExp(){
    
    this.expenseService.createExpense(this.newExp).subscribe(
      resp => {
          console.log(resp);
        },
        (err:any) => {
          console.log(err);
        }
    );

    console.log("addNewExp component is here!");
    console.log(this.newExp);
  }
}
