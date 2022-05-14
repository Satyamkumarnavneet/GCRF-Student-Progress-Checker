import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../assets/img/headerLogo.png'
import { facilitatorInstituionName, facilitatorLastUpdated } from '../../appConfig'


function Header({ showLeaderboard, setShowLeaderboard }) {
    return (
        <StyledHeader>
            <img src={HeaderLogo} alt="" />
            <h1>Student Dashboard</h1>
            <div className="header-info-container">
                <p className="facilitator-last-updated">Last Updated: {facilitatorLastUpdated}</p>
                <p className="facilitator-institution-name">{facilitatorInstituionName}</p>
            </div>
        </StyledHeader>
    );
}

export default Header;

let StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 auto auto;
    /* width: 100vw; */
    box-sizing: border-box;
    h1{
        text-transform: uppercase;
        font-size: 25px;
        color: #EA4335;
        text-align: center;
    }
    img{
        max-width: 300px;
    }
    .header-info-container{
        display: flex;
        align-items: center;
        background-color: white;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 60px;
        padding: 7px 17px;
        .facilitator-last-updated{
            box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
            border-radius: 39px;
            background: #34A853;
            font-size: 12px;
            padding: 5px 10px;
            color: white;
            margin: 0;
            margin-right: 10px;
            font-weight: 600;
            white-space:  nowrap;
        }
        .facilitator-institution-name{
            font-weight: 600;
            margin: 0;
            padding: 0;
            font-size: 12px;
        }
    }
    .tab-menu{
        display: flex;
        margin: 20px;
        p{
            padding: 15px 20px;
            color: black;
            text-transform: uppercase;
            font-size: 15px;
            margin: 10px;
            padding: 0;
            font-weight: 500;
            cursor: pointer;
            white-space: nowrap;
        }
        .tab-menu-active{
            border-bottom: 2px solid black;
        }
    }
    @media only screen and (max-width: 600px) {
        h1{
            font-size: 18px;
        }
        .header-info-container{
            flex-direction: column;
            padding: 10px!important;
            border-radius: 5px;
        }
        .facilitator-institution-name{
            margin-top: 10px!important;
        }
    }
    @media only screen and (max-width: 350px) {
        .tab-menu{
            p{
                font-size: 12px;
            }
        }
    }
`