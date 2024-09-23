import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutService {

  constructor(private http:HttpClient) { }

getCatogry(){
return this.http.get('https://fakestoreapi.com/products/categories');
}

getallproduct(){
  return this.http.get('https://fakestoreapi.com/products')
}
createProduct(opj:any){
  return this.http.post('https://fakestoreapi.com/products',opj)
}
getproductPycatogry(item:any){
  return this.http.get('https://fakestoreapi.com/products/category/'+item)

}

addtocart(opj:any){
  return this.http.post('https://fakestoreapi.com/carts',opj)
}
}
