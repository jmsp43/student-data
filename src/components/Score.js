//renders the score object's date & score properties
import React from 'react'

export default function Score(props) {

  return (
      <div>
          <p>{props.date} --- Score: {props.score} </p>
      </div>
  )
}
