import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../service/list.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  @Input() element: any;
  @Input() id!: number;
  constructor(private listSrv: ListService) {}

  ngOnInit(): void {}
}
