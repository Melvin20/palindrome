import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ProductComponent } from './list/component';
import { ProductRoutingModule } from './produc-routing.module'
import { NavbarService } from '../navbar/navbar.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule, ProductRoutingModule, NgxPaginationModule,HttpClientModule],
  providers: [ProductService],
})
export class ProductModule { }
