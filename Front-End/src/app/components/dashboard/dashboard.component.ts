import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private _userService: UserService){}

  ngOnInit(): void {
    this.loadCustomer();
  }

  //TODO: NOSE PARA QUE SIRVE ESTA FUNCION, getUser() declarada en userService
  loadCustomer() {
    this._userService.getUser().subscribe((res: any) => {
    })
  }


}
