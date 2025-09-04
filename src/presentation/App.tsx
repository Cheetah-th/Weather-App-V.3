import { h } from "preact"
import { Route, Router } from "preact-router"
import Home from "./components/pages/Home"
import WeatherDetails from "./components/pages/WeatherDetails"

export function App() {
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/weather/:city" component={WeatherDetails} />
        </Router>
    )
}