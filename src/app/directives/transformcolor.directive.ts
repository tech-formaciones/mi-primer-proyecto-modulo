import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[transformcolor]',
  host: {
    '(mouseenter)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave($event)'
  }
})
export class TransformcolorDirective {
  @Input() colorName: string;
  @Input() colorName2: string;
  colors: any;

  constructor(private el: ElementRef) { 
    this.colors = { Azul : 'blue', Negro: 'black', Rojo: 'red', Verde: 'green' };
    this.colorName = 'Negro';
    this.colorName2 = 'Negro';

    this.el.nativeElement.style.color = this.colors[this.colorName];
  }

  @HostListener('click', ['$event']) onClick(e: Event) {
    alert('Click - Directiva');
  }

  onMouseEnter(e: Event) {
    this.el.nativeElement.style.color = this.colors[this.colorName2];
  }

  onMouseLeave(e: Event) {
    this.el.nativeElement.style.color = this.colors[this.colorName];
  }

  ChageColor() {
    this.el.nativeElement.style.color = this.colors[this.colorName];
  }
}
