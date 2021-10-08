import React from 'react';

interface Props { 
   
};

const Header: React.FC<Props> = ({ }) => {
    return (
        <React.Fragment>
            <div className="navHeader">
                <div className="top_navbar">
                    <div 
                    className="hamburger icon-hamburger"
                   
                    >
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                .navHeader {
                    position:fixed;
                    width: 100%;
                    transition: all 0.5s ease;
                }
                
                .navHeader .top_navbar {
                    background:  #FFFFFF;
                    box-shadow: 0px 2px 8px rgba(0, 51, 102, 0.07);;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    padding: 0 30px;
                }
                
                .navHeader .top_navbar .hamburger {
                    margin-top: 1rem;
                    font-size: 28px;
                }
                
                .hamburger:hover {
                    color: #a2ecff;
                }`
                }
            </style>
        </React.Fragment>
    );
}

export default Header