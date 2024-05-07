import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atoms-button',
  standalone: true,
  imports: [],
  templateUrl: './atoms-button.component.html',
  styleUrl: './atoms-button.component.scss',
})
export class AtomsButtonComponent {
  @Input() label: string = 'Button';
  @Input() Isicon?: boolean;
  @Input() Isdisabled: boolean = false;
  @Input() icon?: string = '';
  @Input() className?: string = '';
}
