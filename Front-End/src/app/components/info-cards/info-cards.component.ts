import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InfoCard } from 'src/app/interfaces/infoCard';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent {
  infoCards: InfoCard[] = [];

  constructor (private httpClient: HttpClient) {
    
  }
  
  ngOnInit(){

  };

}
