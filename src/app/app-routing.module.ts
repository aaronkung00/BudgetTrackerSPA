import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './admin/add-expense/add-expense.component';
import { AddIncomeComponent } from './admin/add-income/add-income.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { RmExpenseComponent } from './admin/rm-expense/rm-expense.component';
import { RmIncomeComponent } from './admin/rm-income/rm-income.component';
import { RmUserComponent } from './admin/rm-user/rm-user.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [

  {
    path : "",
    component: HomeComponent
  },
  {
    path: "users/:id",
    component: UserDetailComponent
  },  
  {
    path: "addUser",
    component: AddUserComponent
  },
  {
    path: "addIncome",
    component: AddIncomeComponent
  },  
  {
    path: "addExp",
    component: AddExpenseComponent
  },  
  {
    path: "rmUser",
    component: RmUserComponent
  },
  {
    path: "rmIncome",
    component: RmIncomeComponent
  },  
  {
    path: "rmExp",
    component: RmExpenseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
