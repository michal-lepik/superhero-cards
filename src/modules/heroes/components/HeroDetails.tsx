import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'config/variables';

import { Powerstat, Powerstats as _Powerstats } from './shared';

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

export const HeroDetails = () => (
    <Wrapper>
        <h2>Hero name</h2>
        <Details>
            <Image src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg" />
            <div>
                <p>
                    Gender: <b>Male</b>
                </p>
                <p>
                    Race: <b>Human</b>
                </p>
                <p>
                    Height: <b>191 cm</b>
                </p>
                <p>
                    Weight: <b>101 kg</b>
                </p>
                <p>
                    Eye color: <b>Blue</b>
                </p>
                <p>
                    Hair color: <b>Black</b>
                </p>

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
            </div>
        </Details>
    </Wrapper>
);
