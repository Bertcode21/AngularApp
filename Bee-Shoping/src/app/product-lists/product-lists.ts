import { Component } from '@angular/core';

@Component({
  selector: 'product-lists',
  imports: [],
  templateUrl: './product-lists.html',
  styleUrl: './product-lists.css',
})
export class ProductLists {
  name = "John Doe"
  products = { 
name: "Iphone 13 pro max",
price : 345,
color : "Matte Blue",
instock: 15,
discount: 8.9,
pImage: "/images/iphone-13.png",
Description:  "The iPhone 13 Pro Max features a sleek design, advanced camera system, and powerful performance, making it a top choice for smartphone enthusiasts."

  };
getDiscountedPrice() {
return this.products.price - (this.products.price * this.products.discount / 100);
}
onNameChange(event: any){
  console.log(event)
}

}
