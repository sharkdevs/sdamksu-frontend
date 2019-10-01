import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() styleType: string;
  @Input() matIconName: string = null;
  @Output() clickEvent = new EventEmitter();
  @Input() btnName: string;
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.clickEvent.emit(event);
    console.log(event);
  }
}
