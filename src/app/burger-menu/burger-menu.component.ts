import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'burger-menu-component',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() isClosed = true;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  toggle() {
      this.isClosed = !this.isClosed;
      this.isClosed ? this.closed.emit(): this.opened.emit();
  }

}