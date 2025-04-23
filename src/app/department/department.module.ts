import { NgModule } from "@angular/core";
import { DepartmentRoutingModule } from "./department-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { providerList } from "./department-provider-registrar";
import { DepartmentListComponent } from "./component/department.component";
import { CommonModule } from "@angular/common";
@NgModule({
declarations:[
    DepartmentListComponent
],
imports:[
    CommonModule,
    DepartmentRoutingModule,
    HttpClientModule
],
exports:[],
providers:[
    providerList
]
})
export class DepartmentModule{}