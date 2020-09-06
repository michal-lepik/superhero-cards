import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'config/variables';

import { Powerstat, Powerstats } from './shared';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 0 1rem 1rem;
    width: 90%;
    max-width: 17rem;
    box-shadow: 0px 4px 15px 0px rgba(101, 141, 154, 0.15);
    border-radius: 5px;

    ${mediaQueries.sm} {
        width: 100%;
        padding: 0 1.5rem 1rem;
    }
`;

const Image = styled.img`
    height: 15rem;
`;

const mockedPowerstats = {
    intelligence: '81',
    strength: '40',
    speed: '29',
    durability: '55',
    power: '63',
    combat: '90',
};

export const HeroCard = () => (
    <Wrapper>
        <h2>Superhero Name</h2>
        <Image
            src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
            alt="picture of name"
        />
        <Powerstats>
            {Object.entries(mockedPowerstats).map(([name, value]) => (
                <Powerstat key={name}>
                    {name}: <b>{value}</b>
                </Powerstat>
            ))}
        </Powerstats>
    </Wrapper>
);
