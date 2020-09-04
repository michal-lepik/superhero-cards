import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'config/variables';

import { Powerstat, Powerstats as _Powerstats } from './shared';
import { Hero } from '../models/Hero';

const Wrapper = styled.main`
    padding: 1rem 2rem;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    ${mediaQueries.md} {
        flex-direction: row;
    }
`;

const Image = styled.img`
    margin-right: auto;
    margin-bottom: 1rem;
    height: 20rem;

    ${mediaQueries.md} {
        margin-right: 3rem;
    }
`;

const Powerstats = styled(_Powerstats)`
    max-width: 20rem;

    ${mediaQueries.md} {
        grid-template-columns: 1fr 1fr;
    }
`;

interface Props {
    hero: Hero;
}

export const HeroDetails: React.FC<Props> = ({ hero }) => (
    <Wrapper>
        <h2>{hero.name}</h2>
        <Details>
            <Image src={hero.image.url} alt={`picture of ${hero.name}`} />
            <div>
                <p>
                    Gender: <b>{hero.appearance.gender}</b>
                </p>
                <p>
                    Race: <b>{hero.appearance.race}</b>
                </p>
                <p>
                    Height: <b>{hero.appearance.height[1]}</b>
                </p>
                <p>
                    Weight: <b>{hero.appearance.weight[1]}</b>
                </p>
                <p>
                    Eye color: <b>{hero.appearance.eyeColor}</b>
                </p>
                <p>
                    Hair color: <b>{hero.appearance.hairColor}</b>
                </p>

                <Powerstats>
                    {Object.entries(hero.powerstats).map(([name, value]) => (
                        <Powerstat key={name}>
                            {name}: <b>{value}</b>
                        </Powerstat>
                    ))}
                </Powerstats>
            </div>
        </Details>
    </Wrapper>
);
