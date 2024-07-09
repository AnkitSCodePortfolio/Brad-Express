import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Category, Offer, Products } from '../../Models/Product';
import { ProductsService } from '../Services/products.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatTableModule,HttpClientModule,MatPaginatorModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  providers: [ProductsService]
  
})
export class AdminDashboardComponent {
  Product:Products[]=[];
  Category:Category[]=[];
  Offers:Offer[]=[];
  displayedColumns:string[]=["Id","Name","description","price","categoryId","quantity","filePath",'actions']
  constructor(private service:ProductsService,private routers:Router){}
  ngOnInit(): void {
    this.service.GetProducts().subscribe(Product => {
      this.Product = Product;
      console.log(Product);
      
    });
  }
  DeleteStudent(studentId:number){
    // this.service.DeleteStudentData(studentId).subscribe(()=>{
    //   this.ngOnInit();
    }
    EditStudentData(studentId:number)
    {
      // this.router.navigate(['/EditStudent', studentId]); 
    }
  }

 

