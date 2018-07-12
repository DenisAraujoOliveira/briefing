import { Directive,HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[voltar]'
})
export class VoltarDirective {

  @HostListener('click') teste(){
    let parent = this._renderer.parentNode(this._elementRef.nativeElement);
    let ant = this._renderer.parentNode(this._elementRef.nativeElement).previousSibling;
    this._renderer.removeClass(ant.previousElementSibling,'fadeOutLeft');
    this._renderer.removeClass(ant.previousElementSibling,'hide');
    this._renderer.addClass(ant.previousElementSibling,'fadeInLeft');
    this._renderer.addClass(parent,'fadeOutLeft');
    this._renderer.addClass(parent,'hide');
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

}
