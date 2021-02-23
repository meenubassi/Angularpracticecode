import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  firstname: string='';
  p1=0;
  photoId=0;

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe((params)=>{
    //console.log(params);
    const val=params;
    this.p1= val.p1;
    this.photoId=val.photoId;
  });
   }
  ngOnInit(): void {
    console.log(this.activatedRouter.snapshot.data)
  }

}
