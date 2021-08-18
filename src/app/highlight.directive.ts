import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem:ElementRef){}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
