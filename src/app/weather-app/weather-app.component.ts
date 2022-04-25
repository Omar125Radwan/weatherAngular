import { WeatherData } from './../models/weather.model';
import { WeatherService } from './../services/weather.service';
import { Component, ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {
  cityName: string = 'sohag';
  imgUrl = `https://source.unsplash.com/1600x900/?` + this.cityName
  constructor(private weatherService: WeatherService) { }
  weatherData?: WeatherData
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (res) => {
        this.weatherData = res;
        console.log(res);
        this.imgUrl = `https://source.unsplash.com/1600x900/?` + this.cityName
      }
    });
  }

}
