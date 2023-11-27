import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    CommonModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatIconModule,
    NgbCarouselModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ]
})

export class HomeComponent {
  imageList: string[] = [
    'assets/Images/carousel1.jpg',
    'assets/Images/carousel2.jpg',
    'assets/Images/carousel3.jpg',
    'assets/Images/carousel4.jpg',
  ];
}
