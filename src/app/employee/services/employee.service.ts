import { Injectable } from "@angular/core";
import { IEmployeeService } from "./Iemployee.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API } from "../constants/api.const";
import { SelectListItem } from "../models/dropdown-department.model";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService implements IEmployeeService{
constructor(private _httpService:HttpClient){}
getDepartmentDropdown():Observable<SelectListItem[]>{
    return this._httpService.get<SelectListItem[]>(API.DEPARTMENT);
}
addEmployee(emp:Employee):Observable<Employee>
{
    return this._httpService.post<Employee>(API.ADD_EMPLOYEE,emp);
};
getAllEmployee():Observable<Employee[]>
{
    return this._httpService.get<Employee[]>(API.EMPLOYEE);
}


}