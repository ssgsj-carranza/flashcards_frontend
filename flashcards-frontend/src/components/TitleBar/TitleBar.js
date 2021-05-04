import React from 'react';
// import { NavLink } from 'react-router-dom';
import './TitleBar.css';
// import styled from 'styled-components';
// import {NavLink as Link} from 'react-router-dom';
// import {FaBars} from 'react-icons/fa';

function TitleBar(props) {
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <div className="titlebar-nav">
                    <h1>Not Quizlet</h1>
                </div>
            </div>
        </div>
    );
}

export default TitleBar;

