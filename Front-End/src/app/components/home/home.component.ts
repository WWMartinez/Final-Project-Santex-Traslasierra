import { Component } from '@angular/core';
import { InfoCardsComponent } from '../info-cards/info-cards.component';
import { HttpClient } from '@angular/common/http';
import { InfoCard } from 'src/app/interfaces/infoCard';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  infoCards: InfoCard[] = [];

  constructor (private httpClient: HttpClient) {

  }
  
  // ngOnInit(){
  //   this.httpClient.get('localhost:3308/info-cards').subscribe(data => {
  //     this.infoCards = data;
  //   });
  // }


}
