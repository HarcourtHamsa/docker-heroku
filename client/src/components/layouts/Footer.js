import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <div>
            <div className="bg-dark text-white text-left" >
                <div className="container">
                    <div className="row p-3">
                        <div className="col-xl-3">
                            <h5 className="font-weight-bold">About us</h5>
                            <hr style={{ backgroundColor: "white" }} />
                            <ul>
                                <li>News</li>
                                <li>Membership</li>
                                <li>Corporate information</li>
                                <li>Investor Relations</li>
                                <li>House price index</li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <h5 className="font-weight-bold">Contact us</h5>
                            <hr style={{ backgroundColor: "white" }} />
                            <ul>
                                <li>Contact us</li>
                                <li>Lost & stolen cards</li>
                                <li>Have your say</li>
                                <li>Branch finder</li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <h5 className="font-weight-bold">Security</h5>
                            <hr style={{ backgroundColor: "white" }} />
                            <ul>
                                <li>Fraud awareness</li>
                                <li>Viruses and malware</li>
                                <li>Card readers</li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <h5 className="font-weight-bold">Using our site</h5>
                            <hr style={{ backgroundColor: "white" }} />
                            <ul>
                                <li>Accessibility</li>
                                <li>Cookies & privacy</li>
                                <li>Supported Browsers</li>
                                <li>Media, policy and legal</li>
                            </ul>
                        </div>
                    </div>

                    <p className="small pt-3 pb-3">
                        Nationwide Building Society is authorised by the Prudential Regulation Authority 
                        and regulated by the Financial Conduct Authority and the Prudential Regulation 
                        Authority under registration number 106078. You can confirm our registration on
                         the FCA's website (This link will open in a new window) (https://www.fca.org.uk).
                        Nationwide is not responsible for the content of external websites.
                    </p>
                </div>
            </div>
        </div>
    )
}
