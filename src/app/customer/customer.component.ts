import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  firstname: string='';
  terms: boolean= false;
  sex: boolean= true;
  category: string='';
  

  constructor( private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addcustomer(formValue: NgForm)
  {
console.log(formValue);
  }
  resetcustomer(formValue: NgForm)
  {
    //formValue.reset();
    formValue.resetForm();
  }

}
