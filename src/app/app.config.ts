import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APIService } from './Services/api.service';
import { RouterModule } from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideAnimations(),HttpClientModule,APIService]
};
