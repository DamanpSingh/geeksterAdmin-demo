import React from 'react';
import Link from 'next/link';
import { NavbarData } from './NavbarData';
import Logo from '../../Logo';

interface Props { };

const Navbar: React.FC<Props> = ({ }) => {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="headerNavbarLogo">
                    <Link href="/"><a ><Logo /></a></Link>
                </div>
                <ul>
                    {
                        NavbarData.map((navItem, index) => {
                            return (
                                <li className="navListItem" key={index}>
                                    <div className={navItem.iconClass}></div>
                                    <Link href={navItem.path}><a className="navTitle">{navItem.title}</a></Link>
                                    {/* <div className="downArrow icon-down-arrow"></div> */}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <style jsx>
                {
                    `
                    .navbar{
                        background: #2A3042;
                        top: 0;
                        left: 0;
                        width: 225px;
                        height: 100%;
                        padding: 20px 0;
                        transition: all 0.5s ease;
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        flex-shrink: 0;
                        top: 0;
                        bottom:0;
                        position:sticky;
                     }

                     .headerNavbarLogo{
                         margin-bottom: 2rem;
                     }
                     
                     .navListItem{
                         color: white;
                         display: flex;
                         flex-direction: row;
                         font-size: 12px;
                         margin-left: 0;
                         justify-content: flex-start;
                         align-self: flex-start;
                         left: 0;
                         
                     }
                     .downArrow{
                        align-self: flex-end;
                     }
                     ul{
                         margin: 0;
                         padding: 1rem;
                     }


                    `
                }
            </style>
        </React.Fragment>
    );
}

export default Navbar;