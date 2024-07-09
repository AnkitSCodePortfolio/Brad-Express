import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Appliances } from '../../Models/Appliances';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductsService } from '../Services/products.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Products } from '../../Models/Product';
@Component({
  selector: 'app-product',
  standalone: true,
  providers: [ProductsService],
  imports: [CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  appdata: Products[]=[];
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.service.Mobileservices().subscribe(
      (response: Products[]) => {
        console.log('API Response:', response);
        this.appdata = response;
        console.log('Products:', this.appdata);
      },
      (error) => {
        console.error('Error fetching profile pics:', error);
      }
    );
  }
}
