import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/component';
import { NavbarService } from './navbar.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule,RouterModule,FormsModule],
  exports: [TopComponent],
  providers: [],
})
export class NavbarModule { }
