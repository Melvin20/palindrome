import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
})
export class TopComponent implements OnInit {
  languge: string = '';
  search:string='';
  active:boolean=false
  constructor(private nvarService:NavbarService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nvarService.$activeSearch.subscribe((resp:boolean)=>{
     this.active=resp;
    });
  }


  searchValue(){
    if(this.search.length>=3){
    this.nvarService.$searchEvent.emit(this.search);
    }

  }
}
