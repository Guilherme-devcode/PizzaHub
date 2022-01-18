import styled from "styled-components";
import ImgBg from '../../Images/imgbg.jpg'

export const BodyContainer = styled.div`
    background: linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,255.1)),url(${ImgBg});
    height:100vh;
    background-position:center;
    background-size:cover;

`;
export const BodyContent = styled.div`
    height: calc(80vh - 80px);
    max-height: 100%;
    width: 100%;
    padding: 0rem calc((90vw - 1000px)/2);
    @media screen and (max-width: 400px){
        transform: translateY(-100px);


    }
`
export const BodyItems = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
    height:100vh;
    max-height:100%;
    padding: 0 2rem;
    width: 650px;
    color:black;
    text-transform:uppercase;
    line-height:1;
    font-weight:bold;
    

    @media screen and (max-width: 650px){
        width:100%;
    }
`
export const BodyH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw);
    margin-bottom: 1rem;
    box-shadow: 5px 5px #FF7A00;
    letter-spacing: 3px;
    span{
        color:#FF7A00;
    }
`

export const BodyP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom:2rem;
`

export const BodyBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #FF7A00;
    color:#fff;
    transition: 0.2s ease-out;
    border-radius: 10px;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color:#000
    }
`
export const BodyImg = styled.img`
    width: 468px;
    height: 392px;
    position: absolute;
    top: 200px;
    left: 50rem;
    border-radius: 25px;
    box-shadow: -7px 9px 16px 3px rgba(255,122,0,0.7);
    outline: 3px solid #FF7A00;
    outline-offset: 14px ;
    z-index: 0;
    

    

    @media screen and (max-width: 900px){
        transform: translate(-100%, -50%);
        width: 250px;
        height: 200px;
        position: absolute;
        display: none;
    }
    

`;
