import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { Listmodel } from '../models/listmodel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  title!: string;
  elements!: Listmodel[];

  constructor(private listSrv: ListService) {}

  ngOnInit(): void {
    this.elements = this.listSrv.listodo;
    // .filter(
    //   (element) => !element.completed
    // );
  }
  newtodo(id: number, title: string, completed: boolean) {
    this.listSrv.creaelement(this.elements.length + 1, title, completed);
    this.title = '';
  }
}
