import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();

  check:any = true;

  constructor(private pService: RestapiService, private route:Router){ }

  checkingThis(){
    console.log(this.login);
    
    this.pService.loginValidation(this.login).subscribe((response) => {
      let id = ""+response;
      if(response == null){
        this.check = false;
      }else{
        this.check = true;
        sessionStorage.setItem('authenticateUser', id);
        this.route.navigate([""]);
      }
      
    });
    
  }

  // LoginValidation(){
  //   this.pService.CheckLogin().subscribe((response) => {
  //     let arr:any = [];
  //     arr = response;

  //     for(var i=0; i<arr.length; i++){
  //       if(this.username == arr[i].email || this.username == arr[i].name){
  //         if(this.password == arr[i].password){
  //           sessionStorage.setItem('authenticateUser', arr[i].id);
  //           this.route.navigate([""]);
  //         }
  //         else{
  //           this.check = true;
  //         }
  //       }
  //       else{
  //           this.check = true;
  //         }
  //     }
      
  //   })
    

    
  // }

}
