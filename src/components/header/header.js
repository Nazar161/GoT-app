import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './header.css';
import gotLogo from './GotLogo.svg';

const HeaderBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    color: #fff;
    margin: 0;
    text-align: center;
    
`;

const HeaderLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to="/">
                    <div>
                        <img height={35} src={gotLogo} alt="Logo"/>
                    </div>
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li className="links-in-header">
                    <Link to="/start/">Random Character</Link>   
                </li>
                <li className="links-in-header">
                    <Link to="/characters/">Characters</Link>
                </li>
                <li className="links-in-header">
                    <Link to="/houses/">Houses</Link>
                </li>
                <li className="links-in-header">
                    <Link to="/books/">Books</Link>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;