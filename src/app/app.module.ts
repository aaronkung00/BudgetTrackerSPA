import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HeaderComponent } from './core/layouts/header/header.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddIncomeComponent } from './admin/add-income/add-income.component';
import { AddExpenseComponent } from './admin/add-expense/add-expense.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RmUserComponent } from './admin/rm-user/rm-user.component';
import { RmIncomeComponent } from './admin/rm-income/rm-income.component';
import { RmExpenseComponent } from './admin/rm-expense/rm-expense.component';
import { UpdateExpenseComponent } from './admin/update-expense/update-expense.component';
import { UpdateIncomeComponent } from './admin/update-income/update-income.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AddUserComponent,
    AddIncomeComponent,
    AddExpenseComponent,
    UserDetailComponent,
    RmUserComponent,
    RmIncomeComponent,
    RmExpenseComponent,
    UpdateExpenseComponent,
    UpdateIncomeComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
