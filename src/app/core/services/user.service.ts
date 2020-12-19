import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getOneUsers(id : number) : Observable<User>{
    return this.apiService.getOne('users',id);
  }


}
