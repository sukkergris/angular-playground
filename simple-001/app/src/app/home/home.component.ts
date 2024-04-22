import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'tahh-home',
  standalone: true,
  imports: [NgFor, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(){
  
  }
}
