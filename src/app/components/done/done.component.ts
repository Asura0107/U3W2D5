import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  elements: any[] = [];

  constructor(private listSrv: ListService) {}

  ngOnInit(): void {
    this.elements = this.listSrv.listodo;
  }
}
