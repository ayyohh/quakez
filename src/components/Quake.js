import React, { Component } from 'react'

class Quake extends Component {

  render(){
    let tsunami;
    if(this.props.tsunami === 1) {
      tsunami = <p>This caused a fucking TSUNAMI</p>;
    }


    return (
      <div className="indivQuakes">
        <p>{this.props.place}</p>
        <p>Mag: {this.props.mag}</p>
        {tsunami}

      </div>
    )

  }

}

export default Quake
