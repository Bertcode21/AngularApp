import { Component } from '@angular/core';

@Component({
  selector: 'product-lists',
  imports: [],
  templateUrl: './product-lists.html',
  styleUrl: './product-lists.css',
})
export class ProductLists {
  products = { 
name: "Iphone 13 pro max",
price : 999,
color : "Matte Black",
discountedPrice: 899,
Description:  "The iPhone 13 Pro Max features a sleek design, advanced camera system, and powerful performance, making it a top choice for smartphone enthusiasts."

  };


}
