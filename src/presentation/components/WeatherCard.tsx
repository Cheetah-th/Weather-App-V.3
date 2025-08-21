import { h } from "preact"

interface WeatherCardProps {
  city: string
  temp: number
}

export function WeatherCard({ city, temp }: WeatherCardProps) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "1rem",
      borderRadius: "8px",
      textAlign: "center"
    }}>
      <h2>{city}</h2>
      <p>{temp} °C</p>
    </div>
  )
}