import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message: string;
  today: Date;
  favActor;
  price: number;

  constructor() { }

  ngOnInit() {
    this.message = null;
    this.today = new Date();
    this.favActor = {
      name: 'Nicholas Cage',
      country: 'USA'
    };
    this.price = 26.3;
  }

}
