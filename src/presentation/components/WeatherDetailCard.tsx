import { h } from "preact"

interface Props {
    city: string
    temp: number
    humidity: number
    windSpeed: number
}

export function WeatherDetailCard({ city, temp, humidity, windSpeed }: Props) {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p>🌡️ อุณหภูมิ: {temp.toFixed(1)} °C</p>
            <p>💧 ความชื้น: {humidity}%</p>
            <p>💨 ลม: {windSpeed} m/s</p>
        </div>
    )
}