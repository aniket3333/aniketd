import { Provider } from "@angular/core";
import { EMP_SERVICE } from "./services/Iemployee.service";
import { EmployeeService } from "./services/employee.service";

export const providerList:Provider[]=[
    {
        provide:EMP_SERVICE,
        useClass:EmployeeService
    }
]