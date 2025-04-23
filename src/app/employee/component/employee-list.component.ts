import { Component, Inject, OnInit } from "@angular/core";
import { SelectListItem } from "../models/dropdown-department.model";
import { EMP_SERVICE, IEmployeeService } from "../services/Iemployee.service";
@Component({
    selector:'app-employee',
    templateUrl:'./employee-list.component.html'
})
export class EmployeeListComponent implements OnInit{
    _departMent:Array<SelectListItem>
    constructor(@Inject(EMP_SERVICE) private _employeeService:IEmployeeService){}
ngOnInit(): void {
    this._departMent = [];
    // this.getDepartments();
}

getDepartments()
{
    this._employeeService.getDepartmentDropdown().subscribe(
        (res)=>{
this._departMent = res;
console.log(this._departMent);
        },
        (error)=>{
console.log(error);
        }
    );
}
}
