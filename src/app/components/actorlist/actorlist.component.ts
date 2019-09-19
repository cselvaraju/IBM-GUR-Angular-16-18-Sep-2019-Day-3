import { Component, OnInit, ViewChild } from '@angular/core';
import { Actor } from '../../models/actor';
import { MatTable } from '@angular/material';

import { ActordataService } from '../../services/actordata.service';



@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  @ViewChild('myTable', {static: true}) myTable: MatTable<any>;
  actorList: Actor[];
  displayedColumns: string[] = ['name', 'city', 'rating', 'actions'];
  dataSource: Actor[];
  selectedIndex: number;
  tempActor: Actor;

  constructor(private actordataService: ActordataService) { }

  ngOnInit() {
    this.actorList = this.actordataService.getActorList();
    this.dataSource = this.actorList;
    this.selectedIndex = -1;
    this.tempActor = null;
  }

  deleteActor(index) {
    // console.log(index);
    // this.actorList.splice(index, 1);
    this.actordataService.deleteActor(index);
    this.myTable.renderRows();
  }

  addActor(name, city, rating) {
    // this.actorList.push({
    //   name,
    //   city,
    //   rating
    // });
    this.actordataService.addActor({
      name,
      city,
      rating
    });
    this.myTable.renderRows();
  }

  editActor(index: number) {
    this.selectedIndex = index;

    // SHALLOW COPY!!! DON'T DO THIS AT ALL!!
    // this.tempActor = this.actorList[index];

    // SOLUTION - DEEP COPY

    // Approach 1 (Works but not recommended)
    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   city: this.actorList[index].city,
    //   rating: this.actorList[index].rating
    // };

    // Approach 2 (This also works but not recommended)
    // this.tempActor = Object.assign({}, this.actorList[index]);

    // Approach 3 (RECOMMENDED APPROACH)
    this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));
  }

  saveActor(index: number) {
    this.selectedIndex = -1;
    this.myTable.renderRows();
  }

  cancelEdit(index: number) {
    this.actorList[index] = this.tempActor;
    this.selectedIndex = -1;
    this.myTable.renderRows();
  }

  handleKey(event: KeyboardEvent, index: number) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }
}
