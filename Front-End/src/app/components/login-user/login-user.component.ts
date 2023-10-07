import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  login() {
    // Validamos que el usuario ingrese los datos necesarios
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }
    // Creamos el Objeto
    const user: User = {
      username: this.username,
      password: this.password,
    };

    this.loading = true;

    this._userService.login(user).subscribe((res: any) => {
      console.log('RESPONSE: ', res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/encrud']);
    });

    // this._userService.login(user).subscribe({
    //   next: (token) => {
    //     localStorage.setItem('token', token);
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (e: HttpErrorResponse) => {
    //     this._errorService.msjError(e);
    //     this.loading = false;
    //   },
    // });
  
  } // login() close 
}
