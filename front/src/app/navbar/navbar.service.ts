import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() { }
  $searchEvent=new EventEmitter<string>();
  $activeSearch=new EventEmitter<boolean>();
}
