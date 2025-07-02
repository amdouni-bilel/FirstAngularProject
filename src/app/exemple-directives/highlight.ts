import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // Utilisable comme un attribut HTML
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Quand la souris entre dans l'élément
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }

  // Quand la souris sort de l'élément
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
