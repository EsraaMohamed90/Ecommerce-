import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginOpj:any={
  name:'',
  password:''
}
constructor(private rout:Router){}
login(){
  if(this.loginOpj.name=='admin'&&this.loginOpj.password=="1234"){
this.rout.navigateByUrl("/product");
  }
  else
  alert("wrong password or user name")
}
}
