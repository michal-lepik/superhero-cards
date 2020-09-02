import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'config/variables';

import { HeroCard } from './HeroCard';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${mediaQueries.md} {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const HeroesCards = () => (
    <Wrapper>
        {[1, 2, 3].map(x => (
            <HeroCard key={x} />
        ))}
    </Wrapper>
);
