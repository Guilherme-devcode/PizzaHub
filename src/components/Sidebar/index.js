import React from 'react'
import {SidebarContent, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContent isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Sobremesas</SidebarLink>
                <SidebarLink to="/">Menu Completo</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Peça Já</SidebarRoute>
            </SideBtnWrap>
        </SidebarContent>
    )
}

export default Sidebar
