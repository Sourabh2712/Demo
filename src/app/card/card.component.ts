import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Input() tabs: any;
  @Input() item = '';

  @Input() parentStyle: any;

  constructor() {}

  // exampleHost!: ComponentPortal<any>;
  ngOnInit() {
    // this.exampleHost = new ComponentPortal(CardComponent);
  }
  // tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  selected = new FormControl(0);
}

export class TabGroupAlignExample {}

// ?This function s for the adding tab dynamically when we click on addfuntin in HTML if want to add put these line in export class
// tabt: string = '';
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
