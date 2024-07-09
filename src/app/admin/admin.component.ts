import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductsService } from '../Services/products.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Category, Offer, Products } from '../../Models/Product';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-admin',
  standalone: true,
  providers:[ProductsService],
  imports: [CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
productForm:FormGroup;
constructor(private service:ProductsService)
{
  this.productForm= new FormGroup({
    Name:new FormControl('', [Validators.required]),
    Description:new FormControl('', [Validators.required]),
    Price:new FormControl('', [Validators.required]),
    Quantity:new FormControl('', [Validators.required]),
    ItemId:new FormControl('', [Validators.required]),
    myControlC:new FormControl('', [Validators.required]),
    myControlD:new FormControl('', [Validators.required]),
    ProfilePicture: new FormControl(''),
  });
}
Offer:Offer[]=[];
Category:Category[]=[];
offerId: number | undefined;
categoryId: number |undefined;
selectedProfilePicture: File | null = null;
myControlC = new FormControl('');
myControlD = new FormControl('');
filteredOptionsC!: Observable<Category[]>;
filteredOptionsD!: Observable<Offer[]>;

ngOnInit() {

this.filteredOptionsC = this.myControlC.valueChanges.pipe(
      startWith(''),
      map(value => this._filterC(value || '')),
  );
  this.filteredOptionsD = this.myControlD.valueChanges.pipe(
    startWith(''),
    map(value => this._filterD(value || '')),
);
  
  this.service.Category().subscribe(category=>{
    this.Category=category;
   
  })
  this.service.Offers().subscribe(offer=>{
    this.Offer=offer;
   
  })
}
AddProduct() {
  
  if (!this.myControlC.value) {
    this.myControlC.markAsTouched();
    return;
  }

  if (!this.myControlD.value) {
    this.myControlD.markAsTouched();
    return;
  }

  const selectedCategory = this.Category.find(d => d.name === this.myControlC.value);
  const selectedOffer = this.Offer.find(c => c.title === this.myControlD.value);
  
  

  if (!selectedCategory) {
    this.myControlD.markAsTouched();
    return;
  }
  
  if (!selectedOffer) {
    this.myControlC.markAsTouched();
    return;
  }
  
  const ProductReq = {
    name: this.productForm.get('Name')?.value,
    description: this.productForm.get('Description')?.value,
    price: this.productForm.get('Price')?.value,
    categoryid: selectedCategory.id,
    offerid: selectedOffer.id,
    filePath: this.selectedProfilePicture, 
    Image: this.selectedProfilePicture, 
     
  };
  this.service.AddProductData(ProductReq).subscribe(
    (response: Products) => {
      this.showSuccessAlert(response.message);
      this.productForm.reset();
      this.profilePictureUrl = 'assets/images/pic.png'; 
      console.log("success")
    },
    error => {
      this.showErrorAlert()
      console.log("error")
    }
  );

  console.log('Data to be sent to the API:', ProductReq);  

}


showSuccessAlert(message:string) {
  Swal.fire({
    title: 'Success!',
    text: message,
    icon: 'success',
    confirmButtonText: 'OK'
  });
}

showErrorAlert() {
  Swal.fire({
    title: 'Error!',
    text: 'Something went wrong or Student Already Exists with the same entries!',
    icon: 'error',
    confirmButtonText: 'OK'
  });
}
  private _filterC(value: string): Category[] {
    const filterValue1 = value.toLowerCase();
  
    return this.Category.filter(category => category.name.toLowerCase().includes(filterValue1));
  }
  
  private _filterD(value: string): Offer[] {
    const filterValue2 = value.toLowerCase();
  
    return this.Offer.filter(offer => offer.title.toLowerCase().includes(filterValue2));
  }
  value = '';
  profilePictureUrl: string = 'assets/Images/product.jpg';

  uploadProfilePicture(event: any): void {
    const file = event.target.files[0];
    console.log('Selected File:', file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePictureUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      this.selectedProfilePicture = file;
    }
  }
  
}
