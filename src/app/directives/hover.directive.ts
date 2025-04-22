import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector:'[onhovercolor]'
})
export class OnHover implements OnInit{
constructor(private el:ElementRef){}
ngOnInit(): void {
   
}

@HostListener('mouseenter') onMouseEnter()
{
    this.changeColur('yellow');
}
@HostListener('mouseleave') onMouseLeave()
{
    this.changeColur('red');
}

changeColur(color:string):string
{
    return   this.el.nativeElement.style.backgroundColor = color;
}
}