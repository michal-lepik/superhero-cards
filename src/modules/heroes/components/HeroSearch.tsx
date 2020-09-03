import React from 'react';
import styled from 'styled-components';

import { colors, fontSizes } from 'config/variables';

import magnifyingGlassIcon from 'assets/icons/magnifyingGlass.svg';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 4rem;
`;

const SearchBar = styled.input`
    padding: 0.5rem 0.2rem;
    font-size: ${fontSizes.big};
    border: none;
    border-bottom: 1px solid ${colors.primary};
`;

const Icon = styled.img`
    margin-left: 0.7rem;
    width: 2rem;
    height: 2rem;
`;

export const HeroSearch = () => (
    <Wrapper>
        <SearchBar placeholder="Search..." />
        <Icon src={magnifyingGlassIcon} alt="" aria-hidden="true" />
    </Wrapper>
);
