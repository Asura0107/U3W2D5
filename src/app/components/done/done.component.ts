import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { Listmodel } from '../models/listmodel';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  elements!: Listmodel[];

  constructor(private listSrv: ListService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.elements = this.listSrv.listodo;
    }, 2000);
  }
  Delete(i: number) {
    this.elements.splice(i, 1);
  }
}
