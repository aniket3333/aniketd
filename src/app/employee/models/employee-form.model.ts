import { FormControl, FormGroup } from "@angular/forms";
import { Employee } from "./employee.model";

export class EmployeeForm extends FormGroup{
constructor(){
    super(
        {
            Id:new FormControl(0),
            name:new FormControl(''),
            salary:new FormControl(''),
            departmentId:new FormControl(0)
        }
    )
}

getFormData():Employee
{
let model = new Employee()
model.Id = this.get('Id').value;
model.name = this.get('name').value;
model.salary = this.get('salary').value;
model.departmentId = this.get('departmentId').value;
return model;
}

}