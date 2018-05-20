import React, { Component } from "react";
import './App.css';


const API = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec'

class Main extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          weather: {
            temp: [],
            pressure: 1014,
            humidity: 93,
            temp_min: 270.15,
            temp_max: 275.15,
            isLoading: false, 
            error: null
          }, 
          icon:{
              icons: []
          }

        };
      }
      componentDidMount() {
        //Before fetch it shows loading 
        this.setState({isLoading:true});
        fetch(API)
          .then(response => {
            // if reponse is fine 
            if(response.ok){
              return response.json();
            } else{
              throw new Error('Something went wrong.');
            }
          })
          .then(data => this.setState({ weather: data.main, icon: data.weather[0], isLoading: false }))
          .catch(error => this.setState({error, isLoading: false}));
      }
    render() {
      const { weather, icon, isLoading, error } = this.state;
      let weatherIcon = "http://openweathermap.org/img/w/" + icon.icon + ".png";
      let center = {
        textAlign: "center"
      }
      if(error){
        return <p>Problem with fetch</p>
      }
      if(isLoading){
        return <p>Loading...</p>
      }
        return (
          <div className="flex">
              <h3 className="cityName">Stockholm, Sweden</h3>
              <div className ="flex-column wView">
                <img style={{maxHeight: "auto"}} alt="weather icon"src={weatherIcon} />
                <h3>{icon.main}</h3>
              </div>
              <div className="flex-column wReport">
                <div>
                  <h3 style={center}>{(weather.temp - 273).toFixed(0)} °C</h3>
                  <p>Humidity: {weather.humidity}</p>
                  <p>Min Temp: {weather.temp_min}</p>
                  <p>Max Temp: {weather.temp_max}</p>
                </div>
              </div>                           
          </div>
        );
    }
}

export default Main;