import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { AdminComponent } from './pages/admin';
import { ErrorComponent } from './pages/error';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: ErrorComponent },
];
