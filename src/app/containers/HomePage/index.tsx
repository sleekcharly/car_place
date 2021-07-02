import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../../components/navBar';
import { TopSection } from './topSection';

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
    return <PageContainer>
        <Navbar />
        <TopSection />
    </PageContainer>
}