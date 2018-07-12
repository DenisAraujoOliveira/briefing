import { Directive,HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[modal]'
})
export class ModalDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  @HostListener('click',["$event"]) fechar(){
    let element = event.target as HTMLUnknownElement;
    if(element.getAttribute('class') == 'fundo-brief'){
      let parent = this._renderer.parentNode(this._elementRef.nativeElement);
      this._renderer.addClass(parent,'hide');
    }
  }

}
