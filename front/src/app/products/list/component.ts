import { Component, OnInit } from '@angular/core';;
import { Router } from '@angular/router';
import { IPromotion } from 'src/app/interfaces/promotion.interface';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class ProductComponent implements OnInit {
  pages: number = 1;
  resultSearch:IPromotion[] | undefined
  constructor(private navbarService:NavbarService,private productService:ProductService){}
  ngOnInit(): void {
  this.navbarService.$searchEvent.subscribe((res:string)=>{
    this.productService.searchValue(res).then((resp:any)=>{
      this.resultSearch=resp;
    })
  })
  }
}
