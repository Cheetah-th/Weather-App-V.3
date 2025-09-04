import { h } from "preact"
import { useEffect, useState } from "preact/hooks"
import { getWeather } from "../../../core/di"
import { WeatherDetailCard } from "../WeatherDetailCard"
import { route } from "preact-router"

interface Props {
    city?: string
}

export default function WeatherDetails({ city }: Props) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        if (!city) {
            route("/")
            return
        }

        getWeather(city)
            .then(res => {
                setData(res)
                setLoading(false)
            })
            .catch(() => {
                setError("ไม่พบข้อมูลสภาพอากาศ")
                setLoading(false)
            })
    }, [city])

    if (loading) return <p>กำลังโหลดข้อมูล...</p>
    if (error) return <p style={{ color: "red" }}>{error}</p>

    return (
        <div className="container">
            <button className="back-button" onClick={() => route("/")}>← กลับ</button>

            <WeatherDetailCard
                city={data.name}
                temp={data.main.temp}
                humidity={data.main.humidity}
                windSpeed={data.wind.speed}
            />
        </div>
    )
}