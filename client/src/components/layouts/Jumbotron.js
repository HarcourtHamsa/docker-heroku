import React from 'react'
import "./jumbotron.css"

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="text-red h1 font-weight-bold">Your home. Our <br /> commitment</h1>
        <p className="text-white mt-5 mb-5">
          We want to do all we can to help our mortgage members whose <br />
          finances have been affected by coronavirus.
        </p>
        <a href="/" className="btn btn-red text-white">Home support package</a>
      </div>
    </div>

  )
}

export default Jumbotron
