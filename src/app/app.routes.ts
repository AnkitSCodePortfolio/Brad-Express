import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './Login/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ReturnsComponent } from './returns/returns.component';
import { ProductComponent } from './product/product.component';
import { WatchesComponent } from './watches/watches.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { GardenComponent } from './garden/garden.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { DecorComponent } from './decor/decor.component';
import { ComputerComponent } from './computer/computer.component';
import { ClothingComponent } from './clothing/clothing.component';
import { CarComponent } from './car/car.component';
import { BooksComponent } from './books/books.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BabyComponent } from './baby/baby.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { AlexaCategoriesComponent } from './alexa-categories/alexa-categories.component';
import { AmazonDevicesComponent } from './amazon-devices/amazon-devices.component';
import { AmazonFashionComponent } from './amazon-fashion/amazon-fashion.component';
import { AmazonFreshComponent } from './amazon-fresh/amazon-fresh.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WatchDetailComponent } from './watch-detail/watch-detail.component';

export const routes: Routes = [
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'return',
    component:ReturnsComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'watch',
    component:WatchesComponent
  },
  {
    path:'gift',
    component:GiftCardComponent
  },
  {
    path:'garden',
    component:GardenComponent
  },
  {
    path:'furniture',
    component:FurnitureComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'decor',
    component:DecorComponent
  },
  {
    path:'computer',
    component:ComputerComponent
  },
  {
    path:'clothing',
    component:ClothingComponent
  },
  {
    path:'car',
    component:CarComponent
  },
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'beauty',
    component:BeautyComponent
  },
  {
    path:'baby',
    component:BabyComponent
  },
  {
    path:'appliances',
    component:AppliancesComponent
  },
  {
    path:'alexacat',
    component:AlexaCategoriesComponent
  },
  {
    path:'amazondevice',
    component:AmazonDevicesComponent
  },
  {
    path:'amazonfashion',
    component:AmazonFashionComponent
  },
  {
    path:'amazonfresh',
    component:AmazonFreshComponent
  },
  {
    path:'order',
    component:OrdersComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'address',
    component:AddressesComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"admin-dash",
    component:AdminDashboardComponent
  },
  {
     path:'watch-details/:id',
     component:WatchDetailComponent
  }
];
