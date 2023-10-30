import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'products-page';
  productsArray: any[] = [];

  constructor(private productSrv: ProductService){

  }

  ngOnInit(): void {
    this.loadProducts();

  }

loadProducts() {
  this.productSrv.getAllProducts().subscribe((Res: any)=> {
    this.productsArray = Res.data;
    })
}

}
