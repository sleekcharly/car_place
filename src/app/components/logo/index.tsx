// create a reusable component for rendering the application log
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

// set styles for LogoContainer
const LogoContainer = styled.div`
  ${tw`
flex
items-center
`}
`;

// set style for logo text
/*definitions
 *text-xl : extra large text for mobile
 *md:text-2xl : larger text for medium devices and larger screens
 *font-bold : make font bold
 *m-1 : set entire margin
 */
const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `};

  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

//set styles for Image
const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
  `};

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img
          src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg}
          alt="car place logo"
        />
      </Image>
      <LogoText color={color || "dark"}>Car Place</LogoText>
    </LogoContainer>
  );
}
