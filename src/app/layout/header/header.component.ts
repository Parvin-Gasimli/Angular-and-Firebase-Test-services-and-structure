import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutModelProps } from './layout.model';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  LayoutItems: LayoutModelProps[] = [
    {
      name: 'Home',
      url: '',
    },
    {
      name: 'Auth',
      url: 'auth',
    },
    {
      name: 'Login',
      url: 'login',
    },
    {
      name: 'Register',
      url: 'register',
    },
  ];
}
