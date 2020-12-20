import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Income } from 'src/app/shared/models/income';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private apiService:ApiService) { }

  getAllIncome() : Observable<Income[]>{ 
    return this.apiService.getAll('income');
  }

  getOneIncome(id : number) : Observable<Income>{
    return this.apiService.getOne('income', id);
  }

  createUser(inc : Income) : Observable<Boolean> {

    return this.apiService.create('income',inc).pipe(
      map((response) => {
          if(response){
            console.log(response);
            return true;
          }
          return false;
      })
    );
  }

  deleteUser(id : number) : Observable<Boolean> {

    return this.apiService.delete('income/'+ id).pipe(
      map((response) => {
          if(response){
            console.log(response);
            return true;
          }
          return false;
      })
    );
  }

  updateUser(inc : Income) : Observable<Boolean> {

    return this.apiService.update('income',inc).pipe(
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