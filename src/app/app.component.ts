import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, Output } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Renderer2, ElementRef, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  title = 'Demo';
  // @Input() time: any;
  tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
  currentItem = 'Television';
  tabConfiguration = {};
  // exampleHost: ComponentPortal<any> | undefined;

  ngOnInit() {
    // this.exampleHost = new ComponentPortal(CardComponent);
  }
}
