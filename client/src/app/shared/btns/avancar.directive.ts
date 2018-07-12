import { Directive,HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[avancar]'
})
export class AvancarDirective {

  @HostListener('click') teste(){
    let parent = this._renderer.parentNode(this._elementRef.nativeElement);
    console.log(parent);
    let prox = this._renderer.nextSibling(parent)
    this._renderer.addClass(parent,'fadeOutLeft');
    this._renderer.removeClass(prox.nextElementSibling,'hide');
    this._renderer.removeClass(prox.nextElementSibling,'fadeOutLeft');
    this._renderer.addClass(prox.nextElementSibling,'fadeInRight');
    this._renderer.addClass(parent,'hide');
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
  }

}
