import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addUserRequestModel } from 'src/app/shared/models/addUserRequestModel';
import { UserDetailResponseModel } from 'src/app/shared/models/UserDetailResponseModel';
import { User } from '../../shared/models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService:ApiService) { }

  getAllUsers() : Observable<User[]>{ 
    return this.apiService.getAll('users');
  }

  getOneUsers(id : number) : Observable<UserDetailResponseModel>{
    return this.apiService.getOne('users', id);
  }

  createUser(user : addUserRequestModel) : Observable<Boolean> {

    return this.apiService.create('Users/addUser',user).pipe(
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

    return this.apiService.delete('users/'+ id).pipe(
      map((response) => {
          if(response){
            console.log(response);
            return true;
          }
          return false;
      })
    );
  }

  updateUser(user : addUserRequestModel) : Observable<Boolean> {

    return this.apiService.update('users',user).pipe(
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
