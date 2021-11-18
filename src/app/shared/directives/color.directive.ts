import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private element: ElementRef) { 
    console.log(element.nativeElement)
    element.nativeElement.style.color = "red";
  }

}
