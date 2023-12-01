import { Injectable } from '@angular/core';
import { Listmodel } from '../models/listmodel';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  listodo: Listmodel[] = [];
  constructor() {}
  creaelement(title: string, completed: boolean) {
    setTimeout(() => {
      this.listodo.push({ title, completed });
    }, 2000);

    console.log(this.listodo);
  }
}
