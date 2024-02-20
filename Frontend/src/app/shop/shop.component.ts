import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { Router } from '@angular/router';
import { MessageServiceService } from '../service/message-service.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  // data : any;
  id = "";
  title = "";
  product: any = new Products();

  constructor(private service:RestapiService, private route: Router, private msgService: MessageServiceService) { }

  ngOnInit() {
    this.msgService.message$.subscribe(data => {
      this.title = data;
      this.allProducts();
    })
    // this.ShopProducs();
  }

  allProducts(){
    // console.log(this.product);
    this.service.getProductsList().subscribe((response) => {
      this.product = response;
      // console.log(this.product);
      
    })
    
  }

  

  // ShopProducs(){
  //   this.service.GetProduct(this.title).subscribe((response) => {
  //     this.data = response;   
  //   });
  // }

  ProductPage(id:any){
    this.id = id;
    this.route.navigate(["product", this.id])
    
  }

}
