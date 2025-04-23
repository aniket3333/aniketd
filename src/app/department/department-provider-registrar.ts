import { Provider } from "@angular/core";
import { DEPARTMENT_SERVICE } from "./services/Idepartment.service";
import { DepartmentService } from "./services/department.service";

export const providerList:Provider[]=[
    {
        provide:DEPARTMENT_SERVICE,
        useClass:DepartmentService
    }
]