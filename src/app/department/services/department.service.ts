import {  Injectable } from "@angular/core";
import { IDepartmentService } from "./Idepartment.service";
import { HttpClient } from "@angular/common/http";
import { API } from "../contants/api.const";
import { Observable } from "rxjs";
import { Department } from "../models/department.model";

@Injectable()
export class DepartmentService implements IDepartmentService{
constructor(private _httpService:HttpClient){}

public getDepartmentList():Observable<Department[]>
{
   return this._httpService.get<Department[]>(API.LIST);
}
}