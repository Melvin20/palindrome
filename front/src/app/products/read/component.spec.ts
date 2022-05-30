import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { ProductService } from '../product.service';
import { ProductViewComponent } from './component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { TopComponent } from 'src/app/navbar/top/component';
import { IPromotion } from 'src/app/interfaces/promotion.interface';
import { environment } from 'src/environments/environment';

describe('ProductViewComponent', () => {
  let service:ProductService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        BrowserModule,
        HttpClientModule
      ],
      declarations: [
        ProductViewComponent,
        TopComponent
      ],
      providers:[
        ProductService,
        NavbarService
      ]
    }).compileComponents();
  });
beforeEach(()=>{
  service=TestBed.inject(ProductService);
  
});
   it('should create productView', async () => {
 
    expect(service).toBeTruthy();

  });
});
