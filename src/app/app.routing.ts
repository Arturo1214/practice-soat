import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_guards/index';
import {SoatComponent} from './soat/soat.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'soat', component: SoatComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
