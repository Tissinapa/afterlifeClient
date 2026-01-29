import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';



const HellTemperatures: number[] = [666, 690, 1000, 2245, 10000, 300000];

const HeavenTemperatures: number[] = [15, 20, 19, 22, 25, 28, 18];

const HellWeather: string[] = ["Firestorms", "Sulfuric Rain", "Toxic Clouds", "Eternal Darkness"];

const HeavenWeather: string[] = ["Sunny", "Partly Cloudy", "Rainbows", "Clear Skies"];




@Component({
  selector: 'app-about',
  standalone: true,
  imports: [  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  
  randomIndexFromHellTemperatures = Math.floor(Math.random() * HellTemperatures.length);
  randomIndexFromHeavenTemperatures = Math.floor(Math.random() * HeavenTemperatures.length);
  randomIndexFromHellWeather = Math.floor(Math.random() * HellWeather.length);
  randomIndexFromHeavenWeather = Math.floor(Math.random() * HeavenWeather.length);

  hellTemperature = HellTemperatures[this.randomIndexFromHellTemperatures];
  heavenTemperature = HeavenTemperatures[this.randomIndexFromHeavenTemperatures];
  hellWeather = HellWeather[this.randomIndexFromHellWeather];
  heavenWeather = HeavenWeather[this.randomIndexFromHeavenWeather];


  

}
