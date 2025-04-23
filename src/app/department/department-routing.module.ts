import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentListComponent } from "./component/department.component";
const routes:Routes=[
    {path:'',redirectTo:'list',pathMatch:'full'},
    {path:'list',component:DepartmentListComponent}

]
@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class DepartmentRoutingModule{}