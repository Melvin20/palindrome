import { Component, OnInit } from '@angular/core';;
import { ActivatedRoute, Router } from '@angular/router';
import { IPromotion } from 'src/app/interfaces/promotion.interface';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class ProductViewComponent implements OnInit {
  id:string='';
  item:IPromotion | any;
  constructor(private route: ActivatedRoute,private productService:ProductService,private router: Router,private navBarService:NavbarService){}
  ngOnInit(): void {
    this.navBarService.$searchEvent.subscribe((res:string)=>{
      this.router.navigate(['/products']);
    })
    this.id = this.route.snapshot.params['id'];
    this.id?this.readQuery(this.id):this.router.navigate(['/products']);
    this.navBarService.$activeSearch.emit(true);
  }
  readQuery(id:string){
    this.productService.queryValue(id).then((resp:any)=>{
        this.item=resp
    }).catch(error => {
      console.log(error);
    })
  }
}
