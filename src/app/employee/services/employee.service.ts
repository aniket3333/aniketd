import { Injectable } from "@angular/core";
import { IEmployeeService } from "./Iemployee.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeService implements IEmployeeService{
constructor(private _httpService:HttpClient){}

}