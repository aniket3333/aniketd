import { Component, ContentChild, ElementRef, OnInit } from "@angular/core";
@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html'
})
export class EmployeeComponent implements OnInit{
    @ContentChild('aniket') aniket : ElementRef;
    emp:string;
constructor(){}
ngOnInit(): void {
    this.emp = 'R Rohit';
}

chnageName()
{
    this.aniket.nativeElement.style.backgroundColor = 'pink';
}
}