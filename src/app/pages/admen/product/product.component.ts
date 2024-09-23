import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ProdutService } from '../../servers/produt.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit{
isSidePanelVesiple:boolean=false


constructor(private proserv:ProdutService){

}
  ngOnInit(): void {
    this.getalllCatogry();
    this.getproduct();
  }
getalllCatogry(){
  return this.proserv.getCatogry().subscribe((data:any)=>{
  this.catogryList=data
  })
}

showPanel(){
this.isSidePanelVesiple=true;
}
removPanel(){
  this.isSidePanelVesiple=false;
  }
productOpj:any={
  
    id:'',
    title:'',
    price:'',
    category:'',
    description:'',
    image:''

}


catogryList:any[]=[]

productList:any[]=[]
getproduct(){
  return this.proserv.getallproduct().subscribe((res:any)=>{
  this.productList=res
  })
}
onSave() {
  console.log(this.productOpj); 
  this.proserv.createProduct(this.productOpj).subscribe(
    (res: any) => {
      if (res) {
        alert("Product created successfully!");
        console.log(this.productList)
        this.getproduct();
      } else {
        alert("Failed to create product");
      }
    },
    (error) => {
      console.error("Error:", error);
      alert("An error occurred while creating the product.");
    }
  );
}
onedite(item:any){
  this.showPanel()
  this.productOpj=item
 
    

}
}
