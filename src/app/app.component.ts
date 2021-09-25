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
  // constructor(private renderer: Renderer2, private el: ElementRef) {}
  constructor() {}
  title = 'Demo';
  tabs: any;
  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold',
  };

  // ?  This code is for adding Component portal to the child
  // exampleHost: ComponentPortal<any> | undefined;
  // tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
  // currentItem = 'Television';
  // @Input() time: any;

  ngOnInit() {
    // this.exampleHost = new ComponentPortal(CardComponent);
  }
}
