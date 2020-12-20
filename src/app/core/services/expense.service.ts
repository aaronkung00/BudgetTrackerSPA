import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expenditure } from 'src/app/shared/models/expenditure';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private apiService:ApiService) { }

  getAllExpense() : Observable<Expenditure[]>{ 
    return this.apiService.getAll('expense');
  }

  getOneExpense(id : number) : Observable<Expenditure>{
    return this.apiService.getOne('expense', id);
  }

  createExpense(exp : Expenditure) : Observable<Boolean> {

    return this.apiService.create('expense',exp).pipe(
      map((response) => {
          if(response){
            console.log(response);
            return true;
          }
          return false;
      })
    );
  }

  
  deleteExpense(id : number) : Observable<Boolean> {

    return this.apiService.delete('expense/'+ id).pipe(
      map((response) => {
          if(response){
            console.log(response);
            return true;
          }
          return false;
      })
    );
  }

  updateExpense(inc : Expenditure) : Observable<Boolean> {

    return this.apiService.update('expense',inc).pipe(
      map((response) => {
          if(response){
            console.log(response);
            return true;
          }
          return false;
      })
    );
  }

}
