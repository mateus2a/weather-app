import React, { Component } from 'react';
import './App.css';

import 'weather-icons/css/weather-icons.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Weather from './components/weather'

//api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = "b718feefc076806fb97c63bb4ac8dfd3"

class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.getWeather()
  }

  getWeather = async () => {
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
    
    const response = await api_call.json()

    console.log(response)
  }

  render() {
    return(
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
