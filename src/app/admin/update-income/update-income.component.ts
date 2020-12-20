import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/core/services/income.service';
import { Income } from 'src/app/shared/models/income';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.css']
})
export class UpdateIncomeComponent implements OnInit {

  updateInc : Income = {
    userId : 0,
    amount : 0,
    description: '',
    incomeDate: '',
    remarks:''
  } 

  constructor(private incomeService : IncomeService) { }

  ngOnInit(): void {
  }

  UpdateIncome(){
      console.log((this.updateInc))
      this.incomeService.updateUser(this.updateInc).subscribe(
        (resp) => {
          console.log(resp);
        },
        (err:any) =>{
          console.log(err);
        }
      );
  }
}
