import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SearchedHeroes } from '../models/SearchedHeroes';
import { HeroResponse } from '../models/Hero';
import { colors } from 'config/variables';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
`;

const Results = styled.ul`
    margin: 0;
    align-self: flex-start;
`;

const Result = styled.li`
    margin: 1rem 0;
`;

interface Props {
    searchedHeroes: SearchedHeroes;
}

export const ResultsWrapper: React.FC<Props> = ({ searchedHeroes }) =>
    searchedHeroes.response === HeroResponse.Error || !searchedHeroes.results ? (
        <p>No heroes with given name found</p>
    ) : (
        <Results>
            {searchedHeroes.results.slice(0, 4).map(result => (
                <StyledLink key={result.id} to={`/hero/${result.id}`}>
                    <Result>{result.name}</Result>
                </StyledLink>
            ))}
        </Results>
    );
