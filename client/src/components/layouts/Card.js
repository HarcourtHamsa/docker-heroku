import React from 'react'
import awards_img from "../../images/Moneyfacts_CC_awards.png"
import loans_img from "../../images/Q21917 Non Nectar Roundel Loans040520.png"
import payee_img from "../../images/COP-Icon-360x170.jpg"
import insurance_img from "../../images/slide1.jpg"
import home_img from "../../images/Ways-to-bank-from-home.jpg"
import "./card.css"

function Card() {
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-xl-4 ">
                        <div className="card shadow p-3">
                            <h5 className="card-title text-blue">Online banking</h5>
                            <hr />
                            <p className="text-muted">Managing your credit card online is easy</p>
                            <ul className="small">
                                <li>Get paperless statements</li>
                                <li>Check your balance</li>
                                <li>Update your details</li>
                            </ul>

                            <div className="text-center mt-5">
                                <div className="">
                                    <a href="/login" className="btn btn-red text-white btn-block">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card shadow p-3">
                            <h5 className="card-title text-blue">Credit cards</h5><hr />
                            <img src={awards_img} className="card-img-top" alt="my_img" />
                            <p className="text-muted mt-3 h5">Voted best in class</p>
                            <p className="small text-muted mt-3">
                                We won Best Credit Card Provider (Introductory Rate)
                                at the Moneyfacts Awards 3 years running.
                            </p>

                            <a href="/" className="btn btn-red text-white btn-block">Find out more</a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card shadow p-3">
                            <h5 className="card-title text-blue">Loans calculator</h5><hr />
                            <img src={loans_img} className="card-img-top"  alt="my_img" />
                            <p className="small mt-3 text-muted">How much will you like to borrow?</p>

                            <a href="/" className="btn btn-red text-white btn-block">Calculate</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4">
                        <div className="card shadow p-3">
                            <h5 className="card-title text-blue">Confirmation of payee</h5><hr />
                            <img src={payee_img} className="card-img-top"  alt="my_img" />
                            <p className="small mt-3 text-muted">
                                We're changing the way you set up a new payee
                                 to help protect you against certain types of fraud.
                        </p>
                            <a href="/" className="btn btn-red text-white btn-block">Learn more</a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card shadow p-3">
                            <h5 className="card-title text-blue">Travel insurance</h5><hr />
                            <img src={insurance_img} className="card-img-top"  alt="my_img" />
                            <p className="small mt-3 text-muted">
                                Stay up to date on the latest coronavirus related travel
                                insurance information with our dedicated travel page.
                        </p>
                            <a href="/" className="btn btn-red text-white btn-block">Read now</a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card shadow p-3">
                            <h5 className="card-title text-blue">Ways to bank from home</h5><hr />
                            <img src={home_img} className="card-img-top"  alt="my_img" />
                            <p className="small mt-3 text-muted">
                                Stay up to date on the latest coronavirus related travel
                                insurance information with our dedicated travel page.See how we can help you manage your
                                money through our Banking app and online services.
                        </p>
                            <a href="/" className="btn btn-red text-white btn-block">Get help online</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card
