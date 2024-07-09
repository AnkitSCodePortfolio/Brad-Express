import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Home } from '../../Models/Home';
import { APIService } from '../Services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Products } from '../../Models/Product';
import { NgImageSliderModule } from 'ng-image-slider';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [APIService,ProductsService],
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
    HttpClientModule,
    RouterModule,
    NgImageSliderModule,
    NgbCarouselModule,
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel') carousel!: NgbCarousel; 
  selectedName!: string;
  selectedPrice!: string;
  imageObject: Array<object> = [
    {
      video: 'https://youtu.be/SgSrpnW0EmU?si=mJjZM_8zgGizUXfE',
    },
    {
      video: 'https://youtu.be/QdBZY2fkU-0?si=ah2gBZuMW9KFKNBk',
    },
    {
      video: 'https://youtu.be/D4Q_XYVescc?si=aFkKO6x3kPhAdU10',
    },
    {
      video: 'https://youtu.be/ToKJfywbe1o?si=m6QU2e0dUk3unbJa',
    },
  ];
  filepath: Home[] = [];
  mobdata: Products[] = [];
  appdata: Products[] = [];
  appdatas: Products[] = [];
  appdata1: Products[] = [];
  appdata2: Products[] = [];
  appdata3: Products[] = [];
  appdata4: Products[] = [];
  appdata5: Products[] = [];
  appdata7: Products[] = [];
  appdata8: Products[] = [];
  appdata9: Products[] = [];
  appdata10: Products[] = [];
  appdata11: Products[] = [];
  appdata12: Products[] = [];
  appdata13: Products[] = [];
  appdata14: Products[] = [];
  appdata15: Products[] = [];
  appdata16: Products[] = [];
  appdata17: Products[] = [];
  appdata18: Products[] = [];

  currentIndex: number = 0;

  constructor(private service: APIService,private service2:ProductsService) {}

  ngOnInit(): void {
    this.service2.Mobileservices().subscribe(
      (response: Products[]) => {
        console.log('Mobiles API Response:', response);
        this.mobdata = response;
        console.log('Mobiles:', this.mobdata);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service.getAllProfilePics().subscribe(
      (response: Home[]) => {
        console.log('API Response:', response);
        this.filepath = response;
        console.log('Profile Pics:', this.filepath);
      },
      (error) => {
        console.error('Error fetching profile pics:', error);
      }
    );

    this.service2.TodaysDealsCarousel().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata = response;
        console.log('Fashion:', this.appdata);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.FestiveCarousel().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata1 = response;
        console.log('Fashion:', this.appdata1);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.KitchenCarousel().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata2 = response;
        console.log('Fashion:', this.appdata2);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.RecentCarousel().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata3 = response;
        console.log('Fashion:', this.appdata3);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.ComputerCarousel().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata4 = response;
        console.log('Fashion:', this.appdata4);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.getAllBestSeller().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata5 = response;
        console.log('Fashion:', this.appdata5);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service2().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata7 = response;
        console.log('Fashion:', this.appdata7);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service3().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata8 = response;
        console.log('Fashion:', this.appdata8);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service4().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata9 = response;
        console.log('Fashion:', this.appdata9);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service5().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata10 = response;
        console.log('Fashion:', this.appdata10);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service6().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata11 = response;
        console.log('Fashion:', this.appdata11);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service7().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata12 = response;
        console.log('Fashion:', this.appdata12);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service8().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata13 = response;
        console.log('Fashion:', this.appdata13);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service9().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata14 = response;
        console.log('Fashion:', this.appdata14);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service10().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata15 = response;
        console.log('Fashion:', this.appdata15);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service11().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata16 = response;
        console.log('Fashion:', this.appdata16);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service12().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata17 = response;
        console.log('Fashion:', this.appdata17);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    this.service2.service13().subscribe(
      (response: Products[]) => {
        console.log('Fashion API Response:', response);
        this.appdata18 = response;
        console.log('Fashion:', this.appdata18);
        this.updateDetails(0);
      },
      (error) => {
        console.error('Error fetching fashion items:', error);
      }
    );
    // this.service2.service14().subscribe(
    //   (response: Products[]) => {
    //     console.log('Fashion API Response:', response);
    //     this.appdata = response;
    //     console.log('Fashion:', this.appdata);
    //     this.updateDetails(0);
    //   },
    //   (error) => {
    //     console.error('Error fetching fashion items:', error);
    //   }
    // );
  }
  updateDetails(index: number) {
    this.currentIndex = index;
    const selectedItem = this.appdata[index];
    this.selectedName = selectedItem.name;
    this.selectedPrice = selectedItem.price;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT) &&
      slideEvent.paused
    ) {
      this.carousel.pause();
    }
  }

  prevSlide() {
    const newIndex =
      this.currentIndex - 1 >= 0
        ? this.currentIndex - 1
        : this.appdata.length - 1;
    this.updateDetails(newIndex);
    this.carousel.prev();
  }

  nextSlide() {
    const newIndex = (this.currentIndex + 1) % this.appdata.length;
    this.updateDetails(newIndex);
    this.carousel.next();
  }
  
}
