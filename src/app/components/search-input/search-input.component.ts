import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  value: string = '';

  @Output() stringValueEvent = new EventEmitter<string>();

  constructor() {}

  onKeyUpFilter(value: any) {
    this.value = value;
    this.stringValueEvent.emit(this.value);
  }

  ngOnInit(): void {}
}
