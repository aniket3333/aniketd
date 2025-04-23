import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "./component/employee-list.component";
import { EmployeeCreateComponent } from "./component/create/create-employee.component";
const routes:Routes=[
    {path:'',redirectTo:'list',pathMatch:'full'},
        {path:'list',component:EmployeeListComponent},
        {path:'create',component:EmployeeCreateComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class EmployeeRoutingModule{}