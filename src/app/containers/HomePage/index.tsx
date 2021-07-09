import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navBar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";
import { Footer } from "../../components/footer";

const PageContainer = styled.div`
  // Set css properties for the div element PageContainer component with flex, flex-col, full width, full height, centralized items and hidden overflow
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
 `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
