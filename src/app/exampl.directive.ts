import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appExampl]',
})
export class ExamplDirective {
  // times!: number;
  // width: any;
  // height: any;
 
  @Input() times: any;
  @Input() height: any;
  @Input() width: any;
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
 
nit(){
  
  for (let i = 0; i < this.times; i++) {
    // console.log("hey")
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText(`${i + 1}`);
    this.renderer.setStyle(div, 'color', '#fff');
    this.renderer.setStyle(div, 'padding', '35px');
    this.renderer.setStyle(div, 'text-align', 'center');
    this.renderer.setStyle(div, 'margin', '10px');
    this.renderer.setStyle(div, 'width', `${this.width}px`);
    this.renderer.setStyle(div, 'height', `${this.height}px`);
    this.renderer.setStyle(div,'box-shadow','5px 5px #b7b7b5')
    if (i % 2 == 0) {
      this.renderer.setStyle(div, 'background', '#edae81');
    } else {
      this.renderer.setStyle(div, 'background', '#a2e8eb');
    }
    this.renderer.setStyle(this.ele.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.ele.nativeElement, 'padding', '10px');
    this.renderer.setStyle(
      this.ele.nativeElement,
      'justify-content',
      'space-between'
    );
    this.renderer.setStyle(this.ele.nativeElement, 'flex-wrap', 'wrap');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.ele.nativeElement, div);
  }
}

}









