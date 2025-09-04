import { h } from "preact"
import { useState } from "preact/hooks"
import { route } from "preact-router"

export default function Home() {
    const [city, setCity] = useState("Bangkok")

    function handleSearch() {
        if (city.trim()) {
            route(`/weather/${encodeURIComponent(city)}`)
        }
    }

    return (
        <div className="container">
            <h1>Weather App</h1>
            <input
                value={city}
                onInput={e => setCity((e.target as HTMLInputElement).value)}
                placeholder="กรอกชื่อเมือง"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}