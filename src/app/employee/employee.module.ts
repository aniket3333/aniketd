import { NgModule } from "@angular/core";
import { providerList } from "./employee-provider-registrar";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EmployeeListComponent } from "./component/employee-list.component";
import { EmployeeRoutingModule } from "./employee-routing.module";

@NgModule({
    declarations:[EmployeeListComponent],
    imports:[
        CommonModule,
        FormsModule,
        EmployeeRoutingModule
    ],
    exports:[],
    providers:[providerList]
})
export class EmployeeModule{}