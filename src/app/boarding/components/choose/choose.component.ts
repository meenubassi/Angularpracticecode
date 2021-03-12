import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {
  @Input() select = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
