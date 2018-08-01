import React, { Component } from 'react';
import QuakeList from './components/QuakeList'

class App extends Component {
  constructor(){
    super()

    this.state = {
      quakesData: []
    }
  }


  getQuakes = async () => {
    const quakeAPI = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';
    try {
      const quakes = await fetch(quakeAPI);
      const quakesJson = await quakes.json();
      return quakesJson;
    } catch (err) {
      console.log(err, 'error in catch block')
      return err
    }
  }

  componentDidMount(){
    this.getQuakes().then((data) =>
      this.setState({
        quakesData: data.features
      })
    )
  }


  render() {
    return (
      <div className="app">
        <div className="mapContainer">

        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            <QuakeList quakesData={this.state.quakesData} />
        </div>
      </div>
    );
  }
}

export default App;
