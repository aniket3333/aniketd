import { Component, Inject, OnInit } from "@angular/core";
import { SelectListItem } from "../models/dropdown-department.model";
import { EMP_SERVICE, IEmployeeService } from "../services/Iemployee.service";
import { Employee } from "../models/employee.model";
@Component({
    selector:'app-employee',
    templateUrl:'./employee-list.component.html'
})
export class EmployeeListComponent implements OnInit{
    _departMent:Array<SelectListItem>
    allEmployee:Array<Employee>
    constructor(@Inject(EMP_SERVICE) private _employeeService:IEmployeeService){}
ngOnInit(): void {
    this._departMent = [];
    this.allEmployee=[];
    // this.getDepartments();
    this.getAllEmployee();
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

getAllEmployee()
{
    this._employeeService.getAllEmployee().subscribe((res)=>{
this.allEmployee = res;
    },
(error)=>{

});
}
}
