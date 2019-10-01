import styled from 'styled-components';
import { List as list } from '@material-ui/core';

export const List = styled(list)`
    width: 250px;
`

export const MobileMenu = styled.img`
    display: none;
    cursor: pointer;
    width: 25px;
    height: 25px;
`

export const Links = styled.ul`
    display: flex;
    list-style-type: none;
    font-size: 16px;
    font-weight: 700;
    font-family: Roboto;

    > a {
        color: white;
        width: max-content;
        text-decoration: none;
        margin-left: 15px;
        transition: 250ms;
        :hover{
            color: #ffe259;
        }
    }
`

export const Navbar = styled.div`
    background-color: #3649e2;
    height: 75px;
    width: 100%;
    z-index: 100;

    box-sizing: border-box;

    box-shadow: 0 0 5px 0 #333;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    padding: 0 50px;

    @media (max-width: 1000px){
        > ${Links}{ display: none; }
        > ${MobileMenu}{ display: initial; }
    }
`;