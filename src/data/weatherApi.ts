import { httpClient } from "../core/httpClient"

export interface WeatherResponse {
  name: string
  main: {
    temp: number
  }
}

const API_KEY = "ff6b0f2f1d1fd2f65d9a0bcf92785f7e"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export const weatherApi = {
  async getWeather(city: string): Promise<WeatherResponse> {
    return httpClient.get<WeatherResponse>(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    )
  }
}