import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { IncomeService } from 'src/app/core/services/income.service';
import { Income } from 'src/app/shared/models/income';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  newIncome : Income = {
    userId : 0,
    amount : 0,
    description: '',
    incomeDate: '',
    remarks:''
  };

  constructor(private incomeService : IncomeService) { }

  ngOnInit(): void {
  }
  
  AddIncome(){
    console.log(this.newIncome);
    this.incomeService.createUser(this.newIncome).subscribe(
      (response) => {
        console.log(response);
      },
      (err:any) => {
        console.log(err);
      }
    );
    console.log("addNewIncome component is here!");
    console.log(this.newIncome);
  }
}
