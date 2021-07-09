import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%auto;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
  ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUs() {
  return (
    <AboutContainer>
      <CarContainer>
        <img src={JeepImg} alt="Jeep SUV" />
      </CarContainer>

      <InfoContainer>
        <Title>Feel The Best Experience with Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo
          atque necessitatibus, quae sapiente corrupti ex recusandae quisquam
          quos laudantium maiores nobis quas, et fuga ullam perferendis aperiam
          ea distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Voluptatem asperiores optio sint quidem repellat nobis odio?
          Pariatur voluptatem ullam consequuntur, perspiciatis quia, saepe ab
          sit tenetur quae alias magni ut.
        </InfoText>
      </InfoContainer>
    </AboutContainer>
  );
}
