import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";
import { MdMenu } from "react-icons/md";

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;
export const NavLink = styled(Link)`
    color: #202020;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration:none;
    cursor:pointer;
    left:0;
    position:absolute;
    margin-left: 150px;
    margin-top: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;

    span{
        color:#FF7A00;
    }


    @media screen and (max-width: 400px){
        position:absolute;
        top:10px;
        left:25px;
    }
`;
export const NavIcon = styled.div`
    display:block;
    position:absolute;
    top:0;
    right: 0;
    cursor:pointer;
    color:black;
    margin-left: 150px;
    margin-top: 20px;
    
    .menu {
        color:#202020;
        transform: translate(-175%, 50%);
        font-weight:bold;
    }
`;

export const Bars = styled(MdMenu)`
    font-size:2rem;
    transform:translate(-50%, -50%);
`