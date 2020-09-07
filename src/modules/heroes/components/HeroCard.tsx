import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { mediaQueries } from 'config/variables';

import { Powerstat, Powerstats } from './shared';
import { Hero } from '../models/Hero';

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

interface Props {
    hero: Hero;
}

export const HeroCard: React.FC<Props> = ({ hero }) => (
    <Wrapper>
        <h2>{hero.name}</h2>
        <Link to={`/hero/${hero.id}`}>
            <Image src={hero.image.url} alt={`picture of ${hero.name}`} />
        </Link>

        <Powerstats>
            {Object.entries(hero.powerstats).map(([name, value]) => (
                <Powerstat key={name}>
                    {name}: <b>{value}</b>
                </Powerstat>
            ))}
        </Powerstats>
    </Wrapper>
);
