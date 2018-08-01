import React, { Component } from 'react'
import Quake from './Quake'


class QuakeList extends Component {
  render(){
    let quakeList = this.props.quakesData.map((element, index) => {

      return <Quake key={index} mag={element.properties.mag} title={element.properties.title} />

    })

    return (
      <div>
        <ul>
          {quakeList}
        </ul>
      </div>
    )
  }
}

export default QuakeList
