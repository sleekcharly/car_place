import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';
import { NavItems } from './navItems'

// set styling for navbarcontainer
/** styling definitions
 * w-full: component takes full width of the screen
 * max-w-screen-2xl: set maximum width of component to media query screen setting for 2xl
 * flex: css flex
 * flex-row: horizontal flex
 * items-center: centeralize component items
 * lg:pl-12: set left padding for screens equal to or larger than the configured tailwind setting for large screens
 * lg:pr-12 set right padding also for large screens
 * justify between: space the items of component
 * **/
const NavbarContainer = styled.div`
min-height: 60px;
${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
`}
`

const LogoContainer = styled.div``;

export function Navbar() {
    return (<NavbarContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavItems />
    </NavbarContainer>);
}