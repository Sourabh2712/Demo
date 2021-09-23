import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  exampleHost!: ComponentPortal<any>;
    ngOnInit() {
        this.exampleHost = new ComponentPortal(CardComponent);
    }

}
export class TabGroupAlignExample {}
