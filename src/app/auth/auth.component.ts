import { Component, OnInit } from '@angular/core';
import { AtomsButtonComponent } from '../atoms/atoms-button/atoms-button.component';
import { AtomsInputComponent } from '../atoms/atoms-input/atoms-input.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AtomsButtonComponent, AtomsInputComponent, FormsModule, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  formData: any = {
    name: '',
    email: '',
    password: '',
  };
  submitted: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSave() {
    console.log('form submitted', this.formData);
    this.submitted = true;
  }
}
