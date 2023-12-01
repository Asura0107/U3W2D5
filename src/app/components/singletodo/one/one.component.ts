import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../service/list.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  @Input() element: any;
  elements: any[] = [];

  constructor(private listSrv: ListService) {}
  // onDelete(id: number) {
  //   let todo = this.elements.filter((x) => x.id === id)[0];
  //   let index = this.elements.indexOf(todo, 0);
  //   if (index > -1) {
  //     this.elements.splice(index, 1);
  //   }
  // }

  ngOnInit(): void {}
}
