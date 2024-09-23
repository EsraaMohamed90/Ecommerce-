import { Component } from '@angular/core';
import { ProdutService } from '../../servers/produt.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-catogryproduct',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './catogryproduct.component.html',
  styleUrl: './catogryproduct.component.css'
})


export class CatogryproductComponent {
   catogryName:any={}
  constructor(private prose:ProdutService ,private router:Router ,private activer:ActivatedRoute){
  this.activer.params.subscribe((res:any)=>{
    debugger
    console.log(this.catogryName)
    this.catogryName=res
   this.getProductpyCatogry()
  })
  


  }
     
    ngOnInit(): void {
      this.getProductpyCatogry()
      this.getallcatogry()
    }
    catogryList:any[]=[]
  productList:any[]=[]
  
  getallcatogry(){
  return this.prose.getCatogry().subscribe((data:any)=>{
    this.catogryList=data
  })
  }
  natoprod(item:any){
    this.router.navigate(['catogry',item])
  }

  getProductpyCatogry(){
    return this.prose.getproductPycatogry( this.catogryName.name).subscribe((data:any)=>{
      this.productList=data
    })
  }
}
