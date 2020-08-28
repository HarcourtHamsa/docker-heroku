import React from 'react'
import NavBar from './layouts/NavBar'
import Jumbotron from './layouts/Jumbotron'
import InfoCard from './layouts/InfoCard'
import Footer from "./layouts/Footer"
import Card from './layouts/Card'
import FloatingBtn from './layouts/FloatingBtn'

function Landing() {
    return (
        <React.Fragment>
              <InfoCard />
            <NavBar />
            <Jumbotron />
            <FloatingBtn />
            <Card />
            <Footer />
        </React.Fragment>
    )
}

export default Landing
