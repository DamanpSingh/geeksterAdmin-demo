import React, { useEffect, useState } from 'react';
import Header from '../Navigation/Header';
import Navbar from '../Navigation/Navbar'


const Layout = ({ pagetitle, children }) => {

  return (
    <React.Fragment>
      <div className="mainContainer">
        {<Navbar />}
        <div className="contentConntainer">
          <Header />
          <div className="contentWraper">
            <h5 className="pageTitle">{pagetitle}</h5>
            <div className="contentBody">
              {children}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {
          `
          .mainContainer{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            height: 100%;
            top: 0;
            bottom:0;
            position:fixed;
            overflow-y:scroll;
            overflow-x:hidden;
            background-color: #F8F8FB;
            flex: 1;
          }
          .contentConntainer{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            flex-shrink: 1;
            justify-content: flex-start;
          }
          .contentWraper{
            display: flex;
            flex-direction: column;
            height: 100%;
            margin-left: 1rem;
            margin-top: 3rem;
            flex: 1
            
          }
          .contentBody{
            width: 95%;
            background: #FFFFFF;
            box-shadow: 0px 5px 20px rgba(18, 38, 63, 0.0313726);
            border-radius: 8px;
            padding: 1.5rem; 
          }
          .pageTitle{
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
          }
          `
        }
      </style>
    </React.Fragment>
  );
};

export default Layout;
