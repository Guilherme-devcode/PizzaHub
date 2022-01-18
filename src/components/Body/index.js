import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar/index'
import {BodyContainer, BodyImg, BodyContent, BodyItems, BodyH1, BodyP, BodyBtn} from './BodyElements'

const Body = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <BodyContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <BodyContent>
                <BodyItems>
                    <BodyH1>Melhor <span>pizza</span> para você</BodyH1>
                    <BodyP>Pronta em 60 minutos</BodyP>
                    <BodyBtn>Faça o seu pedido</BodyBtn>
                </BodyItems>
                <BodyImg src='https://www.wallpaperbetter.com/wallpaper/215/283/600/pizza-2K-wallpaper.jpg'/>
            </BodyContent>
        </BodyContainer>
    )
}

export default Body
