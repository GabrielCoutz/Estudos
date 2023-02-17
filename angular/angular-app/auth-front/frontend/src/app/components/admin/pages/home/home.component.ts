import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  startLogout() {
    this.authService.logOut();
  }
}
