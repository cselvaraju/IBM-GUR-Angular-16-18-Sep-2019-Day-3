import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentFavDish: string;
  @Output() countryEvent = new EventEmitter();

  favCountry: string;

  constructor() { }

  ngOnInit() {
    this.favCountry = null;
  }

  sendData2Parent() {
    this.countryEvent.emit(this.favCountry);
  }
}
