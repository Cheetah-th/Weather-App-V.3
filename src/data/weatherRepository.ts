import { weatherApi, WeatherResponse } from "./weatherApi"

export class WeatherRepository {
  async fetchWeather(city: string): Promise<WeatherResponse> {
    return weatherApi.getWeather(city)
  }
}
