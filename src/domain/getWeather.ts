import { WeatherRepository } from "../data/weatherRepository"
import { WeatherResponse } from "../data/weatherApi"

export const createGetWeather = (repo: WeatherRepository) => {
  return async (city: string): Promise<WeatherResponse> => {
    return repo.fetchWeather(city)
  }
}