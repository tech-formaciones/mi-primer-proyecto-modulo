import { ChangeDetectorRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ShowIf]'
})
export class ShowIfDirective {
  @Input() set ShowIf(condition: boolean) {
    if (condition == true) {
      this.viewContainer.createEmbeddedView(this.template, {texto: 'Trabando con ViewContainer'});
    }
    else this.viewContainer.clear();
  };

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef,   private cdr: ChangeDetectorRef) { }

}
