import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'auth',
        component: AuthComponent,
      },
    ],
  },
];
