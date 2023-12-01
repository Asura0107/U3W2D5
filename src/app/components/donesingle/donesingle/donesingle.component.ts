import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-donesingle',
  templateUrl: './donesingle.component.html',
  styleUrls: ['./donesingle.component.scss'],
})
export class DonesingleComponent implements OnInit {
  @Input() element: any;

  constructor(private listSrv: ListService) {}

  ngOnInit(): void {}
}
