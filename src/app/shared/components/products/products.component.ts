import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../const/mobile';
import { Imobile } from '../model/mobile';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
mobileData:Array<Imobile>=mobileProducts
  constructor() { }

  ngOnInit(): void {
  }

}
