import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Department } from "../models/department.model";

export const DEPARTMENT_SERVICE = new InjectionToken("department service");
export interface IDepartmentService{
 getDepartmentList():Observable<Department[]>;
}