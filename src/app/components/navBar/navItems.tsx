import React from 'react';
import styled, {css} from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';


// styling the List container
/**definitions
 * list-none: no list style
 */
const ListContainer = styled.ul`
${tw`
    flex
    list-none
`};
`;

// styling for Nav item
/**definitions
 * text-xs : extra small text for mobile devices
 * md:text-base : moderate size text for medium devices
 * text-black : teaxt black color
 * font-medium : medium font
 * cursor-pointer: set cursor to pointer
 * transition: set transition
 * hover:text-gray-700  : set hover color to gray
 */
const NavItem = styled.li< { menu?: any }>`
    ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
    `};

    ${({ menu }) => menu && css`
    
    ${tw`
    text-white
    text-xl
    mb-3
    focus:text-white
    `};
    `};
`;

export function NavItems() {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    
    if (isMobile)
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <a href='#'>Home</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Cars</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Services</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Contact Us</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        );
    
    return (
        <ListContainer>
            <NavItem>
                <a href='#'>Home</a>
            </NavItem>
            <NavItem>
                <a href='#'>Cars</a>
            </NavItem>
            <NavItem>
                <a href='#'>Services</a>
            </NavItem>
            <NavItem>
                <a href='#'>Contact Us</a>
            </NavItem>
        </ListContainer>);

};