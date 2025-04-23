import { NgModule } from "@angular/core";
import { providerList } from "./employee-provider-registrar";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeListComponent } from "./component/employee-list.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeCreateComponent } from "./component/create/create-employee.component";

@NgModule({
    declarations:[EmployeeListComponent,EmployeeCreateComponent],
    imports:[
        CommonModule,
        FormsModule,
        EmployeeRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports:[],
    providers:[providerList]
})
export class EmployeeModule{}