import { Directive,ElementRef,Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[btnModal]'
})
export class BtnModalDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }
  
    @HostListener('click',["$event"]) fechar(){
      let parent = this._renderer.parentNode(this._elementRef.nativeElement);
      this._renderer.removeClass(this._renderer.parentNode(parent).previousElementSibling,'hide');
    }
  

}
