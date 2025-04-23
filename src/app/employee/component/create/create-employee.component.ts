import { Component, OnInit } from "@angular/core";
import { EmployeeForm } from "../../models/employee-form.model";
@Component({
    selector:'app-create',
    templateUrl:'./create-employee.component.html'
})
export class EmployeeCreateComponent implements OnInit{
    employeeForm:EmployeeForm;
constructor(){}
ngOnInit(): void {
    this.employeeForm=new EmployeeForm();
}

onSave()
{

}
}