import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoCard } from 'src/app/interfaces/infoCard';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // definimos el array infoCards importando InfoCard interface
  infoCards: InfoCard[] = [];

  constructor (private httpClient: HttpClient) {}
  
  // get al Back(route), obtenemos un res.data y guardamos la variable data infoCards(array)
  ngOnInit(): void{
    this.httpClient.get<InfoCard[]>('http://localhost:3308/infocard').subscribe(data => {
      this.infoCards = data;
    });
  }



}
