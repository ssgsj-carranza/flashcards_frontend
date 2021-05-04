import React from 'react';
import { NavLink } from 'react-router-dom';
// import './TitleBar.css';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

// function TitleBar(props) {
//     return (
//         <div className="row row-spacer">
//             <div className="col-md-12" style={{padding:0}}>
//                 <div className="titlebar-nav">
//                     <h1>Not Quizlet</h1>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TitleBar;

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src="" alt="" />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};
export default Navbar

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
       color: #15cdfc 
    }
`

export const Bars = styled

// export default Navbar