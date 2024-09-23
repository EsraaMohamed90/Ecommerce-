import { Component, OnInit } from '@angular/core';
import { ProdutService } from '../../servers/produt.service';

@Component({
  selector: 'app-catogrey',
  standalone: true,
  imports: [],
  templateUrl: './catogrey.component.html',
  styleUrl: './catogrey.component.css'
})
export class CatogreyComponent implements OnInit {
constructor(private proserv:ProdutService){

}
  ngOnInit(): void {
  this.getCatogry()
  }
catogrylist:any[]=[
 
  ]

  getCatogry(){
    return this.proserv.getCatogry().subscribe((data:any)=>{
      this.catogrylist=data
    })
  }
}
