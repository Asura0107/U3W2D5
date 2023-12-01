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
  @Input() element: any;
  constructor(private listSrv: ListService) {}

  ngOnInit(): void {
    this.elements = this.listSrv.listodo;
  }
  newtodo(title: string) {
    this.listSrv.creaelement(title);
  }
}
