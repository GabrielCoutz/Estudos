import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  logOut(): boolean {
    const confirmLogout = confirm('Are you sure you want to log');
    if (confirmLogout) return true;
    return false;
  }
}
