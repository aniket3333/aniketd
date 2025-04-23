import { Component, Inject, OnInit } from "@angular/core";
import { EmployeeForm } from "../../models/employee-form.model";
import { SelectListItem } from "../../models/dropdown-department.model";
import { EMP_SERVICE, IEmployeeService } from "../../services/Iemployee.service";
@Component({
    selector:'app-create',
    templateUrl:'./create-employee.component.html'
})
export class EmployeeCreateComponent implements OnInit{
     _departMent:Array<SelectListItem>
    employeeForm:EmployeeForm;
    constructor(@Inject(EMP_SERVICE) private _employeeService:IEmployeeService){}
ngOnInit(): void {
    this.employeeForm=new EmployeeForm();
    this._departMent = [];
    this.getDepartments();
}

onSave()
{

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