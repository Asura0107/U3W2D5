import { Injectable } from '@angular/core';
import { Listmodel } from '../models/listmodel';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  listodo: Listmodel[] = [];
  constructor() {}

  creaelement(id: number, title: string, completed: boolean) {
    setTimeout(() => {
      this.listodo.push({ id: this.listodo.length + 1, title, completed });
    }, 2000);

    console.log(this.listodo);
  }
}
