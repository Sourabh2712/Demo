import { Directive, Input } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { CardComponent } from './card/card.component';

@Directive({
  selector: '[appExample]',
})
export class ExampleDirective {
  @Input()
  exampleHost!: ComponentPortal<any>;
  constructor() {}

  ngOnInit() {
    this.exampleHost = new ComponentPortal(CardComponent);
  }
}
