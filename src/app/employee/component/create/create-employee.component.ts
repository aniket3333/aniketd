import { Component, Inject, OnInit } from "@angular/core";
import { EmployeeForm } from "../../models/employee-form.model";
import { SelectListItem } from "../../models/dropdown-department.model";
import { EMP_SERVICE, IEmployeeService } from "../../services/Iemployee.service";
import { Router } from "@angular/router";
@Component({
    selector:'app-create',
    templateUrl:'./create-employee.component.html'
})
export class EmployeeCreateComponent implements OnInit{
     _departMent:Array<SelectListItem>
    employeeForm:EmployeeForm;
    constructor(private router:Router,@Inject(EMP_SERVICE) private _employeeService:IEmployeeService){}
ngOnInit(): void {
    this.employeeForm=new EmployeeForm();
    this._departMent = [];
    this.getDepartments();
}

onSave()
{
const model = this.employeeForm.getFormData();
console.log(model);
this._employeeService.addEmployee(model).subscribe(
    (res)=>{
console.log(res);
this.router.navigate(['/employee/list']);
    },
    (error)=>{

    }
);
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