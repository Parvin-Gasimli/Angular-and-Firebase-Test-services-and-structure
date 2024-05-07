import { Component, OnInit } from '@angular/core';
import { AtomsButtonComponent } from '../atoms/atoms-button/atoms-button.component';
import { AtomsInputComponent } from '../atoms/atoms-input/atoms-input.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AtomsButtonComponent, AtomsInputComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
