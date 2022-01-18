import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import{
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconsLink
} from './FooterElements'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>PIZZA<span>HUB</span></SocialLogo>
                        <SocialIcons>
                            <SocialIconsLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                            <FaInstagram/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Linkedin' rel='noopener noreferrer'>
                            <FaLinkedin/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Github' rel='noopener noreferrer'>
                            <FaGithub/>
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
