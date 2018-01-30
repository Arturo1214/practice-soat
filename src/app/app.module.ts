import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {routing} from './app.routing';

import {AuthGuard} from './_guards/index';
import {
  AuthenticationService, UserService, CityService, SoatService, TypeUseService, TypeVehicleService,
  PurchaseTypeService
} from './_services/index';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {AuthInterceptor} from './_interceptor/index';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SoatComponent } from './soat/soat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SoatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    AuthenticationService,
    UserService,
    CityService,
    SoatService,
    TypeUseService,
    TypeVehicleService,
    PurchaseTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
