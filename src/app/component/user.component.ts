import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { EmployeeComponent } from "./employee/employee.component";
@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
@ViewChild('box') box:ElementRef;
@ViewChild('aniket') an:EmployeeComponent;
name:string;
    constructor(){}
ngOnInit(): void {
this.name='aniket';
}

changeColor(){
    this.box.nativeElement.style.backgroundColor='red';
}
remove(){
    this.box.nativeElement.style.backgroundColor='';
}

changeName()
{
    this.an.emp = 'Vishal';
}
}