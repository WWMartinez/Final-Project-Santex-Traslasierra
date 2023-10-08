import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private _userService: UserService){}

  // ngOnInit(): void {
  //   this.loadCustomer();
  // }

  //TODO: funciones para llamar a routes en back y obtener info para completar dashboard
  //TODO: ej: getUsers() obtenemos cuantas cuentas users se crearon en la DB
  // loadCustomer() {
  //   this._userService.getUser().subscribe((res: any) => {
  //   })
  // }


}
