import { Component, Inject, OnInit } from "@angular/core";
import { DEPARTMENT_SERVICE, IDepartmentService } from "../services/Idepartment.service";
import { Department } from "../models/department.model";

@Component({
selector:'app-department',
templateUrl:'./department.component.html'
})
export class DepartmentListComponent implements OnInit {
    department:Array<Department>;
constructor(@Inject(DEPARTMENT_SERVICE) private departmentService:IDepartmentService){}
ngOnInit(): void {
    this.department = [];
    this.getDepartmentList();
}

getDepartmentList()
{
this.departmentService.getDepartmentList().subscribe((res)=>{
console.log(res);
this.department = res;
},
(error)=>{
    console.log(error);
    });
}
}