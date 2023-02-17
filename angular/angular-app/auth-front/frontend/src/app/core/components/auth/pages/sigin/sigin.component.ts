import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['teste@gmail.com', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  error: string | undefined;

  submit(): void {
    this.error = '';

    const formIsValid = this.formAuth.valid;
    if (!formIsValid) {
      this.error = 'Preencha os campos!';
      return;
    }

    const payload = this.formAuth.value;
    this.authService.signIn(payload).subscribe({
      next: (response) => console.log(response),
      error: ({ error }) => (this.error = error.message),
    });
  }
}
