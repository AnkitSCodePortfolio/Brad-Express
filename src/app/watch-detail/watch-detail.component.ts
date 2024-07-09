import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  selector: 'app-watch-detail',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule],
  templateUrl: './watch-detail.component.html',
  styleUrl: './watch-detail.component.css',
  providers:[ProductsService]
})
export class WatchDetailComponent implements OnInit {
  Id!: number;
  watchDetails!: Products;
  constructor(private route: ActivatedRoute, private productService: ProductsService){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Id = +params['id'];
      this.productService.GetWatchesById(this.Id).subscribe(
        (response: Products) => {
          this.watchDetails = response;
        },
        (error) => {
          console.error('Error fetching watch details:', error);
        }
      );
    });
  }
  
}
