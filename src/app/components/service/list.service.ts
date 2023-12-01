import { Injectable } from '@angular/core';
import { Listmodel } from '../models/listmodel';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  listodo: Listmodel[] = [];
  constructor() {}
  creaelement(title: string) {
    this.listodo.push({ title, completed: true });
    console.log(this.listodo);
  }
}
