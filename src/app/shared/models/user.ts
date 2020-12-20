import { Expenditure } from "./expenditure";
import { Income } from "./income";

export interface User {
    id? : number;
    email: string;
    fullName:string;
    joinedOn : string;
    incomes: Income[];
    password: string;
    expenditures: Expenditure[]; 
    totalIncome?:number;
    totalExpense?:number;
  } 