import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() tabs: any;
  @Input() config: any;
  constructor() {}

  // exampleHost!: ComponentPortal<any>;
  ngOnInit() {
    // this.exampleHost = new ComponentPortal(CardComponent);
  }
  // tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  // @Input()
  // tabs: any[] = [];
  selected = new FormControl(0);
  tabt: string = '';

  @Input() item = '';

  // addTab(selectAfterAdding: boolean) {
  //   if (this.tabt != '') {
  //     this.tabs.push(this.tabt);
  //   } else {
  //     this.tabs.push('New');
  //   }

  //   this.tabt = '';

  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
  // }

  // removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }
}

export class TabGroupAlignExample {}
