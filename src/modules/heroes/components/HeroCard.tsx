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

export const HeroCard = () => (
    <Wrapper>
        <h2>Superhero Name</h2>
        <Image
            src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
            alt="picture of name"
        />
        <Powerstats>
            <Powerstat>
                intelligence: <b>10</b>
            </Powerstat>
            <Powerstat>
                intelligence: <b>20</b>
            </Powerstat>
            <Powerstat>
                intelligence: <b>30</b>
            </Powerstat>
            <Powerstat>
                intelligence: <b>40</b>
            </Powerstat>
            <Powerstat>
                intelligence: <b>50</b>
            </Powerstat>
            <Powerstat>
                intelligence: <b>60</b>
            </Powerstat>
        </Powerstats>
    </Wrapper>
);
