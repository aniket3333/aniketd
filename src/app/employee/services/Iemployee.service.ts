import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { SelectListItem } from "../models/dropdown-department.model";
export const EMP_SERVICE = new InjectionToken("employee service");
export interface IEmployeeService{
getDepartmentDropdown():Observable<SelectListItem[]>
}