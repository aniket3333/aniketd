import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user.component';

const routes: Routes = [
  {path:'',redirectTo:'department',pathMatch:'full'},
  {path:'department',
    loadChildren:()=>import("./department/department.module").then(m=>m.DepartmentModule)
  },
  {
    path:'employee',
    loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
