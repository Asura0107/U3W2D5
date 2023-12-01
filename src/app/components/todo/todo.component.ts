import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  title!: string;
  elements: any[] = [];

  constructor(private listSrv: ListService) {}

  ngOnInit(): void {
    this.elements = this.listSrv.listodo;
  }
  newtodo(id: number, title: string, completed: boolean) {
    this.listSrv.creaelement(this.elements.length + 1, title, completed);
  }
}
