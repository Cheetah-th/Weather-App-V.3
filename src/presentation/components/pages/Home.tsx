import { h } from "preact"
import { useState } from "preact/hooks"
import { getWeather } from "../../../core/di"
import { WeatherCard } from "../WeatherCard"

export default function Home() {
  const [city, setCity] = useState("Bangkok")
  const [temp, setTemp] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function loadWeather() {
    try {
      setError(null)
      const result = await getWeather(city)
      setTemp(result.main.temp)
    } catch (e) {
      console.error(e)
      setError((e as Error).message)
      setTemp(null)
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Weather App</h1>
      <input
        value={city}
        onInput={e => setCity((e.target as HTMLInputElement).value)}
      />
      <button onClick={loadWeather}>Search</button>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Error: {error}
        </p>
      )}

      {temp !== null && !error && <WeatherCard city={city} temp={temp} />}
    </div>
  )
}
