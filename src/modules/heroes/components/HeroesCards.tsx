import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'config/variables';
import { Hero } from '../models/Hero';
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

interface Props {
    heroes: Hero[];
}

export const HeroesCards: React.FC<Props> = ({ heroes }) => (
    <Wrapper>
        {heroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
        ))}
    </Wrapper>
);
