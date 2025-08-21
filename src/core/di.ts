import { WeatherRepository } from "../data/weatherRepository"
import { createGetWeather } from "../domain/getWeather"

const weatherRepository = new WeatherRepository()
export const getWeather = createGetWeather(weatherRepository)