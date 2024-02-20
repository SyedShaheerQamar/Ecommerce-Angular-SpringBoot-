import { Component, EventEmitter, Output } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  // @Output()
  // myOuptput:EventEmitter<any> = new EventEmitter();

  constructor(private service:RestapiService, private route: ActivatedRoute, private pService: RestapiService) { }

  ngOnInit() {
    this.singleProductPage();
    // this.Product();
  }

  cart: Cart = new Cart();

  data : any;
  id: any;
  htmlvalue = "";

  singleProductPage(){
    this.id = this.route.snapshot.params['id'];
    this.id = parseInt(this.id);

    this.service.getSingleProductFromList(this.id).subscribe((response) => {
      this.data = response;
      // console.log(this.data);
      

      this.htmlvalue = `
        <div class="col-lg-5 col-md-12 col-sm-12">
            <img src="${this.data.img}" class="w-100 img-fluid pb-1" height="50%" id="MainImg" alt="">
  
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <h3 class="my-5 product-title">${this.data.title}</h3>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            (1 customer review)
            <p class="mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eaque nihil quasi ipsam, magnam minima! Eveniet pariatur dolor magni voluptatum accusamus omnis qui sequi eum repellendus. Itaque, culpa. Iste non nihil magni odit suscipit id culpa vitae, sapiente, natus ipsa debitis, similique fugit fugiat ut itaque quidem atque tempora nobis?
            </p>
            <p class="text-primary mt-5 ms-1 fs-4 product-price">
                $${this.data.price}
            </p>
            
      </div>
        `;
      
    });
  }

  
  addToCart(){
    this.cart.product_id = this.data;
    this.cart.quantity = 1;
    
    this.service.saveProductToCart(this.cart).subscribe((response) => {
      if(response){
        alert("Product added to cart!!!");
      }
      
    });
  }

  ProductDetails(){
    // this.myOuptput.emit(this.data);
    this.service.GetProductFromCart().subscribe((response) => {
      let val:any = [];
      val = response;

      let cartItem:any = {
        id : this.data.id,
        title : this.data.title,
        img : this.data.img,
        price : this.data.price,
        quantity : 1
      }    
      
      let flag:Boolean = true;

      for(var i=0; i<val.length; i++){
        if(val[i].id == this.data.id){
          flag = false;
        }
      }

      if(flag){        
        this.pService.SaveProductTocarT(cartItem).subscribe((cartItem));
        alert("Item added to cart.")
      }else{
        alert("Already added to the cart.")
      }

    });

    // let flag:Boolean = true;

    // for(var i=0; i<val.length; i++){
    //   if(val[i].id == this.data.id){
    //     flag = false;
    //   }
    // }

    // if(flag){
    //   this.pDetail.SetProductDetail(this.data);
    // }else{
    //   alert("Already added to the cart.")
    // }
  }

}
