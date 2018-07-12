import { Directive,HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[cardQuestao],[fecharCard]'
})
export class CardQuestaoDirective {

  private state: boolean = false;

  @HostListener('click', ["$event"]) toggle(){
    let element = event.target as HTMLUnknownElement;
    let parent = this._renderer.parentNode(this._elementRef.nativeElement);
    // console.log(element.attributes)
    if(!element.attributes.hasOwnProperty('fecharcard')){
        this._renderer.addClass(parent,'quadromax');
        this.state = true;
    }
    else{
      this._renderer.removeClass(parent,'quadromax');
      this.state = false;
    }
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}
}
