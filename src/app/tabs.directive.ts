import {
  Directive,
  Renderer2,
  ElementRef,
  RendererFactory2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appTabs]',
})
export class TabsDirective {
  @Input() width: any;
  @Input() height: any;
  @Input() times: any;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    for (let i = 0; i < this.times; i++) {
      const div = this.renderer.createElement('mat-tab-label-container');
      const text = this.renderer.createText('Content 4');
      const divv = this.renderer.createElement('div');
      //! this.renderer.setStyle(div, 'color', '#fff');
      //* this.renderer.setStyle(div, 'padding', '35px');
      // this.renderer.setStyle(div, 'text-align', 'center');
      // this.renderer.setStyle(div, 'margin', '10px');
      // ?this.renderer.setStyle(div, 'width', `${this.width}px`);
      // todo this.renderer.setStyle(div, 'height', `${this.height}px`);
      // !this.renderer.setStyle(div,'box-shadow','5px 5px #b7b7b5')
      this.renderer.setStyle(div, 'background', '#edae81');
      // this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
      // this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
      // this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', 'wrap');
      // this.renderer.setAttribute(div, 'lable', 'name');
      this.renderer.appendChild(div, text);
      // this.renderer.appendChild(div,divv);
      this.renderer.appendChild(this.el.nativeElement, div);
    }
  }
}
