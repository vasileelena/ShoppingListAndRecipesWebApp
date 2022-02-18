import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open') isValid: boolean = false

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {  }

  @HostListener('click') click(eventData: Event){
    this.isValid = !this.isValid;
  }
  //
  // @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.isValid = false;
  // }

}
