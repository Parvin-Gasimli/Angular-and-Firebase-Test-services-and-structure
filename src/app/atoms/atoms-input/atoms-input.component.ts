import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-atoms-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './atoms-input.component.html',
  styleUrl: './atoms-input.component.scss',
})
export class AtomsInputComponent {
  @Input() form!: FormGroup;
  @Input() inputType?: string = 'Default Text';
  @Input() inputPlaceholder?: string = 'Default Placeholder';
  @Input() inputClass?: string = 'default-class';
  @Input() inputName?: string = '';
  @Input() inputReadonly?: boolean = false;
  @Input() inputDisabled?: boolean = false;
  @Input() inputId?: string = '';
  @Input() isRequired?: boolean = false;
  @Input() InputValue?: string = '';
}
