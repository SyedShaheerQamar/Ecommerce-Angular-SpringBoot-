import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Products } from '../models/products';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  spring_url: string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }
  
  // ---------------- spring boot api -----------------------------

  loginValidation(login?: Login): Observable<Object>{
    return this.http.post<Object>(`${this.spring_url}/login/validation`, login);
  }

  getProductsList(): Observable<Products>{
    return this.http.get<Products>(`${this.spring_url}/products-list`);
  }

  getSingleProductFromList(id: any): Observable<Products>{  
    return this.http.post<Products>(`${this.spring_url}/single-product`, id);
  }

  saveProductToCart(data: any) {
    return this.http.post(`${this.spring_url}/add-cart`, data);
  }

  getAllProductsFromCart(): Observable<Cart>{
    return this.http.get<Cart>(`${this.spring_url}/get-all-products`);
  }

  removeProductFromCart(id : any) {
    return this.http.delete(`${this.spring_url}/delete-from-cart`, { body: id });
  }

  // ------------------------ json-server ----------------------------------

  GetProduct(title: any) {
    return this.http.get("http://localhost:3000/product?title_like="+title);
  }

  GetSingleProduct(id:any) {
    return this.http.get("http://localhost:3000/product/"+id);
  }

  SaveProductTocarT(data:any){
    return this.http.post("http://localhost:3000/cart", data)
  }

  GetProductFromCart(){
    return this.http.get("http://localhost:3000/cart");
  }

  RemoveProductFromCart(id:any){
    return this.http.delete("http://localhost:3000/cart/"+id);
  }

  GetSingleProductFromCart(id:any) {
    return this.http.get("http://localhost:3000/cart/"+id);
  }

  UpdateCartProducts(data:any, id:any){
    return this.http.put("http://localhost:3000/cart/"+id, data);
  }

  CheckLogin(){
    return this.http.get("http://localhost:3000/login")
  }

  SetLogin(id:any){
    localStorage.setItem("User_Login_Id", id);
  }

  GetLogin(){
    return localStorage.getItem("User_Login_Id");
  }
}
