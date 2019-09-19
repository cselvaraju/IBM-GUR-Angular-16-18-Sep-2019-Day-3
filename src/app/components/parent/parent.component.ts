import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  favDish: string;
  favDish4Child: string;
  childFavCountry; string;

  constructor() { }

  ngOnInit() {
    this.favDish = null;
    this.favDish4Child = null;
    this.childFavCountry = null;
  }

  sendData2Child() {
    this.favDish4Child = this.favDish;
  }

  handleCountryEvent(eventData) {
    this.childFavCountry = eventData;
  }
}
