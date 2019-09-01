import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]',
})
export class SampleDirective {
  observer: MutationObserver;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngAfterViewInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(function (mutation) {
        console.log(mutation.type);
      });
    });
    var config = { attributes: true, childList: true, characterData: true };

    this.observer.observe(this.el.nativeElement, config);
  }

}
