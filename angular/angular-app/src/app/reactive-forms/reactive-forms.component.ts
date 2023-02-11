import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  constructor(private formBuilder: FormBuilder) {}

  cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
  });

  showLog() {
    console.log(this.cadastroForm.value);
  }
}
