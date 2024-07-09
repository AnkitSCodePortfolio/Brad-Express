import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Offer, Products } from '../../Models/Product';
import { ProductReq } from '../../Models/ProductReq';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseurl:string ="https://localhost:7111/api/Product/";
  ebaseurl:string ="https://localhost:7111/api/Product";
  abaseurl:string ="https://localhost:7111/api/";
  alterbase:string ="https://localhost:7203/api/Coupon";
  constructor(private http:HttpClient) { }
  TodaysDealsCarousel(): Observable<Products[]> {
    const url = `${this.baseurl}Mobiles`;
    return this.http.get<Products[]>(url)
  }
  FestiveCarousel(): Observable<Products[]> {
    const url = `${this.baseurl}Furniture`;
    return this.http.get<Products[]>(url)
  }
   KitchenCarousel(): Observable<Products[]> {
    const url = `${this.baseurl}Appliances`;
    return this.http.get<Products[]>(url)
  }
  RecentCarousel(): Observable<Products[]> {
    const url = `${this.baseurl}Decor`;
    return this.http.get<Products[]>(url)
  }
  ComputerCarousel(): Observable<Products[]> {
    const url = `${this.baseurl}Computer&Accessories`;
    return this.http.get<Products[]>(url)
  }
  getAllBestSeller(): Observable<Products[]> {
    const url = `${this.baseurl}Books`;
    return this.http.get<Products[]>(url)
  }
  Mobileservices(): Observable<Products[]> {
    const url = `${this.baseurl}Mobiles`;
    return this.http.get<Products[]>(url)
  }
  service2(): Observable<Products[]> {
    const url = `${this.baseurl}AmazonFashion`;
    return this.http.get<Products[]>(url)
  }
  service3(): Observable<Products[]> {
    const url = `${this.baseurl}Beauty`;
    return this.http.get<Products[]>(url)
  }
  service4(): Observable<Products[]> {
    const url = `${this.baseurl}AmazonDevices`;
    return this.http.get<Products[]>(url)
  }
  service5(): Observable<Products[]> {
    const url = `${this.baseurl}Watches`;
    return this.http.get<Products[]>(url)
  }
  service6(): Observable<Products[]> {
    const url = `${this.baseurl}Baby`;
    return this.http.get<Products[]>(url)
  }
  service7(): Observable<Products[]> {
    const url = `${this.baseurl}Furniture`;
    return this.http.get<Products[]>(url)
  }
  service8(): Observable<Products[]> {
    const url = `${this.baseurl}Decor`;
    return this.http.get<Products[]>(url)
  }
  service9(): Observable<Products[]> {
    const url = `${this.baseurl}AlexaSkills`;
    return this.http.get<Products[]>(url)
  }
  service10(): Observable<Products[]> {
    const url = `${this.baseurl}Garden`;
    return this.http.get<Products[]>(url)
  }
  service11(): Observable<Products[]> {
    const url = `${this.baseurl}Watches`;
    return this.http.get<Products[]>(url)
  }
  service12(): Observable<Products[]> {
    const url = `${this.baseurl}Books`;
    return this.http.get<Products[]>(url)
  }
  service13(): Observable<Products[]> {
    const url = `${this.baseurl}Clothing&Accessories`;
    return this.http.get<Products[]>(url)
  }
  service14(): Observable<Products[]> {
    const url = `${this.baseurl}AmazonFresh`;
    return this.http.get<Products[]>(url)
  }
  service15(): Observable<Products[]> {
    const url = `${this.baseurl}GiftCard`;
    return this.http.get<Products[]>(url)
  }
  service16(): Observable<Products[]> {
    const url = `${this.baseurl}Electronics`;
    return this.http.get<Products[]>(url)
  }
  service17(): Observable<Products[]> {
    const url = `${this.baseurl}Car&Motorbike`;
    return this.http.get<Products[]>(url)
  }
  Category(): Observable<Category[]> {
    const url = `${this.abaseurl}Category`;
    return this.http.get<Category[]>(url)
  }
  Offers(): Observable<Offer[]> {
    const url = `${this.alterbase}`;
    return this.http.get<Offer[]>(url)
  }
  GetProducts(): Observable<Products[]> {
    const url = `${this.ebaseurl}`;
    return this.http.get<Products[]>(url)
  }
  AddProductData(product:ProductReq){
    console.log('Creation of  Data Started');
    const url = this.ebaseurl; 
    const formData = new FormData();   
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('categoryid', product.categoryid.toString());
    formData.append('offerid', product.offerid.toString());
    formData.append('Image', product.Image || ''); 

    if (product.Image) {
      formData.append('Image', product.Image);
    } else {
      console.error('Profile picture is missing or invalid.');
    }
  
    if (product.filePath && product.filePath.name) {
      formData.append('filePath', product.filePath, product.filePath.name);
    } else {
      console.error('File path is missing or invalid.');
    }
    console.log(formData);
    console.log('Creation Finished');
    return this.http.post<Products>(url, formData);
  }
  DeleteProductData(ProductId:number){
    const url = this.baseurl + ProductId;
    return this.http.delete(url);
  }
  GetProductById(ProductId:number) : Observable<Products>{
    const url = this.baseurl + ProductId;
    return this.http.get<Products>(url);
  }
  // EditStudentData(Updatedata:StudentUpdate, Id:number){
  //   const url = this.baseurl + "Student/" + Id;
  //   const formData = new FormData();
  //   formData.append('Name', Updatedata.name);
  //   formData.append('Email', Updatedata.email);
  //   formData.append('FatherName', Updatedata.fatherName);
  //   formData.append('MotherName', Updatedata.motherName);
  //   formData.append('Address', Updatedata.address);
  //   formData.append('PhoneNumber', Updatedata.phoneNumber);
  //   if (Updatedata.profilepic  && Updatedata.profilepic.name) {
  //     formData.append('Profilepic', Updatedata.profilepic, Updatedata.profilepic.name);
  //   }
  //   return this.http.put<Student>(url,formData);
  // }
  GetWatchesById(Id:number) : Observable<Products>{
    const url = this.baseurl+'Watch/' + Id;
    return this.http.get<Products>(url);
  }
}
