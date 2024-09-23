import { Component, OnInit } from '@angular/core';
import { ProdutService } from '../../servers/produt.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
constructor(private prose:ProdutService ,private router:Router){

}
  ngOnInit(): void {
    this.getallproduct()
    this.getallcatogry()
  }
  catogryList:any[]=[]
productList:any[]=[]
getallproduct(){
  return this.prose.getallproduct().subscribe((data:any)=>
  {this.productList=data})
}

getallcatogry(){
return this.prose.getCatogry().subscribe((data:any)=>{
  this.catogryList=data
})
}
natoprod(item:any){
  this.router.navigate(['catogry',item])
}

}
