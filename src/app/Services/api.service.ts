import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../../Models/Home';
import { map } from 'rxjs/operators';
import { Appliances } from '../../Models/Appliances';
import { Products } from '../../Models/Product';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseurl:string ="https://localhost:7249/api/Home/";
  constructor(private http:HttpClient) {}
  getAllProfilePics(): Observable<Home[]> {
    const url = `${this.baseurl}HomeGet`;
    return this.http.get<Home[]>(url)
  }
}
