import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input('color') color :string;
  @Input('size') size :number;

  public text:string='Components—directives with a template.Structural directives—change the DOM layout by adding and removing DOM elements.Attribute directives—change the appearance or behavior of an element, component, or another directive';

  constructor() { }

  ngOnInit() {
  }

  setStyle(){
    return {
      'color':this.color,
      'size':this.size + 'px'
    }
  }

}
