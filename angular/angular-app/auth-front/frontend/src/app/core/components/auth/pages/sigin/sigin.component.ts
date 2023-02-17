import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/Auth/auth.service';
import { AuthModel } from 'src/app/core/services/Auth/interfaces/auth-model';

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
    email: ['', [Validators.required, Validators.email]],
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

    const payload: AuthModel = this.formAuth.value;
    this.authService.signIn(payload).subscribe({
      next: (response) => console.log(response),
      error: (e: string) => (this.error = e),
    });
  }
}
