import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent {
  isLoggedIn: boolean = false;

  constructor(private _userService: UserService, private router: Router) {
    this.isLoggedIn = _userService.isLoggedIn();
  }

  logout(): void {
    this._userService.logout(); // Llama a función logout() del UserService.
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
