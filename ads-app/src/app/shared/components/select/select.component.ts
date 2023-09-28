import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {


  @Input() items: any = [];

  @Output() category = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  handleSelect(e: any) {
    this.category.emit(e.target.value)
  }

}
