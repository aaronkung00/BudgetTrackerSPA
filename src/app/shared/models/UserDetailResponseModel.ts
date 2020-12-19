import { Expenditure } from "./expenditure";
import { Income } from "./income";

export interface UserDetailResponseModel
{
    id : number;
    email: string;
    fullName: string;
    joinedOn : string;
    Incomes: Income[];
    Expenditures: Expenditure[]; 
    totalIncome:number;
    totalExpense:number;
} 