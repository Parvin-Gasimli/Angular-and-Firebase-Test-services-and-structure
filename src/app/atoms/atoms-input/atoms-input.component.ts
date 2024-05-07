import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-atoms-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './atoms-input.component.html',
  styleUrl: './atoms-input.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsInputComponent {
  @Input() form!: FormGroup;
  @Input() inputType: string = 'Default Text';

  @Input() inputPlaceholder: string = 'Default Placeholder';

  @Input() inputClass: string = 'default-class';

  @Input() inputName: string = 'inputName';

  @Input() inputReadonly: boolean = false;

  @Input() inputDisabled: boolean = false;

  @Input() inputId: string = '';

  @Input() controlName!: string;
}
