import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private el :ElementRef) {
   
   }
@HostListener('mouseenter') onMouseEnter(){
  this.HighLight('grey','white')
}
@HostListener('mouseleave') onMouseLeave(){
  this.HighLight('','black')
  
}
private HighLight(color:string,textColor:string){
  this.el.nativeElement.style.backgroundColor=color
  this.el.nativeElement.style.color=textColor
}
}
