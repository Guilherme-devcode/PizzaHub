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
        transform: translate(-100%, -50%);
        font-size: 1.5rem;

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
    @media screen and (max-width: 400px){
        .menu{
            position: absolute;
            display:none;
        }

    }
`;

export const Bars = styled(MdMenu)`
    font-size:2rem;
    transform:translate(-50%, -50%);

    }
    
`