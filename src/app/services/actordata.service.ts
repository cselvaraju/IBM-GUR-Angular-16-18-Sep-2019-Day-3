import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActordataService {

  actorList: Actor[];

  constructor() {
    this.actorList = [
      {name: 'Amitabh Bachhan', city: 'Mumbai', rating: 9.8},
      {name: 'Kamal Hasan', city: 'Chennai', rating: 8.5},
      {name: 'Madhuri Dixit', city: 'Delhi', rating: 9.9},
      {name: 'Priyanka Chopra', city: 'Hollywood', rating: 9.0},
      {name: 'Rajnikant', city: 'Chennai', rating: 9.6, country: 'India'}
    ];
  }

  getActorList(): Actor[] {
    return this.actorList;
  }

  addActor(actor: Actor) {
    this.actorList.push(actor);
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }

  updateActor(index: number, actor: Actor) {
    this.actorList[index] = JSON.parse(JSON.stringify(actor));
  }
}
