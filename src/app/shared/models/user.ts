import { Expenditure } from "./expenditure";
import { Income } from "./income";

export interface User {
    id? : number;
    email: string;
    fullName: string;
    joinedOn : string;
    Incomes: Income[];
    password: string;
    Expenditures: Expenditure[]; 
    totalIncome?:number;
    totalExpense?:number;
  } 