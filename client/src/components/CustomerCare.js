import React from 'react';
import IdleTimerContainer from './IdleTimerContainer';
import {RiHandCoinLine} from 'react-icons/ri';
import DashboardNavbar from './DashboardNavbar';

export default function CustomerCare () {
  return (
    <div>
      <IdleTimerContainer />
      <DashboardNavbar />
      <div className="center text-center">
        <RiHandCoinLine size="30" />
        <h5 className="mt-3">Loans not available </h5>
        <p className="text-muted mb-5 small text-justify">
          Sorry , You do not qualify to take loans yet. This might be due 
          to your current account qualifications
        </p>

        
      </div>
    </div>
  );
}
